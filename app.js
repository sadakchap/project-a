'use strict'

const express = require('express');
const app = express();
const cors = require('cors')

// Middleware mounting to app level
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.get('/a-test', (req, res) => {
  res.send('workfing!!');
})

app.listen(8080, () => {
  console.log('listening to server: 8080');
});