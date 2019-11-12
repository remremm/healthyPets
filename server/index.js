const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const data = require('../fakeData');
const PORT = 3004;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '..', 'client', 'dist', 'public')));

app.get('/fakeData', (req, res) => {
  res.json(data);
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})