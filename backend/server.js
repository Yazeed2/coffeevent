const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const events  = require('./routes/events')
const cors = require('cors')
const user = require('./routes/user')
const admin = require('./routes/admin')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/events', events)


mongoose.connect(
  process.env.DEV_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);

app.use('/users', user)
app.use('/users/userId/events', events)
app.use('/admin',admin)


app.get("*", (req, res) => {
  res.render("404");
});

app.listen(5100, () => console.log("express running in 5100"));
