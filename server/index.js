const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/../public')));


app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/morelikethis/:id', async (req, res) => {
  await axios.get(`http://localhost:4022/morelikethis/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to server', err);
      res.status(404).end();
    });
});

app.get('/images/:page', async (req, res) => {
  const { data } = await axios.get(`http://localhost:4012/images/${req.params.page}`);
  res.send(data);
});

app.get('/reviews/:id', async (req, res) => {
  var {data} = await axios.get(`http://localhost:4052/reviews/${req.params.id}`);
  console.log(data);
  res.send(data);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});