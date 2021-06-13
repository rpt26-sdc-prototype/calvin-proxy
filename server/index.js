const newrelic = require('newrelic');
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

// app.get('/images/:id', async (req, res) => {
//   await axios.get(`http://localhost:4012/images/${req.params.id}`)
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(err => {
//       console.log('Error with GET request to image service', err);
//       res.status(404).end();
//     });
// });
app.get('/photoBundle/index_bundle.js', async (req, res) => {
  try {
    const { data } = await axios('http://18.118.17.38/index_bundle.js');
          //console.log(data);
    //var {data} = await axios.get('https://steam-fec.s3.amazonaws.com/bundle/index_bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/images/:id', async (req, res) => {
  try {
    const { data } = await axios(`http://18.118.17.38/images/${req.params.id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err)
  }
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
  await axios.get(`http://3.130.170.99:4022/morelikethis/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to my service', err);
      res.status(404).end();
    });
});

// app.get('/moreLikeThisBundle/bundle.js', async (req, res) => {
//   try {
//     var {data} = await axios.get('http://3.130.170.99:4022/bundle.js')
//     res.send(data)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

// app.get('/morelikethis/:id', async (req, res) => {
//   await axios(`http://3.130.170.99:4022/morelikethis/${req.params.id}`)
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(err => {
//       console.log('Error with GET request to server', err);
//       res.status(404).end();
//     });
// });

// GET reviews

app.get('/reviews/:id', async (req, res) => {
  try {
    var {data} = await axios(`https://www.steammop.app/reviews/${req.params.id}`);
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/reviewBundle/bundle.js', async (req, res) => {
  try {
    var {data} = await axios('https://steammop.app/bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});