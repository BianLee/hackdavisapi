// https://hackdavisapi.vercel.app/api/getPost
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var dotenv = require("dotenv");
const app = express();
const PORT = 9000;

const apiRouter = require("./routes/api");
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", apiRouter);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
