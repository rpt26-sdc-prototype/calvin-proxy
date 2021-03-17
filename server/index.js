const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 4021;

app.use(express.static(path.join(__dirname + '/../public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/morelikethis/:id', async (req, res) => {
  await axios.get(`http://localhost:4022/morelikethis/${req.params.id}`)
    .then(response => {
      console.log(response);
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to server', err);
      res.status(404).end();
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});