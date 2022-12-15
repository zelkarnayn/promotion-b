const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()

app.use(cors())
mongoose.set('strictQuery', true)
app.use(express.json())
app.use('images/', express.static(path.join(__dirname, 'images')))

app.use(require("./routes/news.router"));
app.use(require("./routes/comment.router"));
app.use(require("./routes/product.route"));
app.use(require('./routes/categories.route'))
app.use(require('./routes/fighters.route'))

app.use(require("./routes/news.router"))
app.use(require('./routes/comment.router'))

const server = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB, () => {
      console.log("Успешное подключение к БД");
    });
    app.listen(process.env.PORT, () => {
      console.log("Сервер успешно запущен");
    });
  } catch (error) {
    console.log(error.message);
  }
};

server();
