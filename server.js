const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware functions
//parts incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
// lets server get style.css and script.js
app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

/////  bottom  /////
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}.`); // and there was much rejoycing
});
