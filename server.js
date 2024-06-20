const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to category page");
});

app.get("/home", (req, res) => {
  res.send("welcome to Home page");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  try {
    console.log(`listening to port http://localhost:${PORT}...`);
  } catch (error) {
    console.log("error in connection");
  }
});
