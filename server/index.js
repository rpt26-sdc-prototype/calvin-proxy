const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/../public/dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/dist/index.html'));
});

// GET images

app.get('/images/:id', async (req, res) => {
  await axios.get(`http://100.24.35.141:4012/images/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to image service', err);
      res.status(404).end();
    });
});


// GET product information

app.get('/api/product/:id/', async (req, res) => {
  await axios.get(`http://localhost:4032/api/product/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to product service', err);
      res.status(404).end();
    });
});

// GET similar games

app.get('/morelikethis/:id', async (req, res) => {
  await axios.get(`http://54.193.16.203:4022/morelikethis/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to my service', err);
      res.status(404).end();
    });
});

// GET reviews

app.get('/reviews/:id', async (req, res) => {
  await axios.get(`http://18.144.23.11:4052/reviews/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to review service', err);
      res.status(404).end();
    });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});