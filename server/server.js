import express from 'express';
import nodeFetch from 'node-fetch';
import Unsplash, { toJson } from 'unsplash-js';
import cors from 'cors';
const config = require('universal-config');
const app = express();
global.fetch = nodeFetch;

const unsplash = new Unsplash({
  applicationId: '48fb49b3c685d0a283242d0b45b169464ffb95f926e305aaf6a5d55ab3caf82d',
  secret: '9060531e26d3989e368dea2d8f43c544ad9382d757223ae7c4fff78656683c9e',
  callbackUrl: 'https://emmanuelnwogbo.github.io/unsplash-gallery'
});

app.use(cors());

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://emmanuelnwogbo.github.io/unsplash-gallery");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.get('/api/photos', (req, res) => {
  unsplash.photos.listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => res.json(json))
});

app.get('/api/photos/search', (req, res) => {
  unsplash.search.photos(req.query.searchterm, req.query.start, req.query.count)
  .then(toJson)
  .then(json => res.json(json));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
})