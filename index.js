const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const errorMiddleware = require('./controllers/users/middlewares/error.middlewares')
require('dotenv').config()

// временно чтобы populate сработал так как auth.route не работает
require('./models/users/User.model')

app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000"]
}))
app.use(express.json())
app.use(cookieParser())
app.use("/images", express.static(__dirname + "/images"));
app.use(require('./routes/categories.route'))
app.use(require('./routes/fighters.route'))
mongoose.set('strictQuery', false)

app.use(require("./routes/comment.route"));
// app.use(require("./routes/product.route"));
// app.use(require("./routes/categories.route"));
// app.use(require("./routes/fighters.route"));
// app.use(require('./routes/auth.route'))
app.use(require("./routes/news.route"));
app.use(require("./routes/comment.route"));
app.use(require("./routes/cart.route"));
app.use(errorMiddleware)

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
  