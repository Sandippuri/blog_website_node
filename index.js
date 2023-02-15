const express = require("express");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoute = require("./routes/blogs");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
// connect to db
const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err);
  }
};

connectDB();

app.use("/blogs", postRoute);

app.listen(port, () => {
  console.log("backend is running");
});
