
const express = require('express');
const app = express();
const path = require('path');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../index.html'))
})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/