const express = require("express");
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Inititalise CORS use
app.use(cors());

// Setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev")); // configire morgan

app.get("/", (req, res) => {
  res.json("Custard Creams");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});