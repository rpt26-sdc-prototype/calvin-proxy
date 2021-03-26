const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

// GET images

app.get('/images/:id', async (req, res) => {
  await axios.get(`http://localhost:4012/images/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to my service', err);
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
      console.log('Error with GET request to my service', err);
      res.status(404).end();
    });
});

// GET similar games

app.get('/morelikethis/:id', async (req, res) => {
  await axios.get(`http://localhost:4022/morelikethis/${req.params.id}`)
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
  await axios.get(`http://localhost:4052/reviews/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to my service', err);
      res.status(404).end();
    });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});