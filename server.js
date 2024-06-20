const express = require("express");
const app = express();
const userModel = require("./models/user");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to category page");
});

app.get("/category", async (req, res) => {
  const { categoryName, categoryDescription } = req.body;
  const category = await userModel.find({
    categoryName,
    categoryDescription,
  });
  res.send(category);
});

app.post("/category", async (req, res) => {
  const { categoryName, categoryDescription } = req.body;
  const newCategory = new userModel({
    categoryName,
    categoryDescription,
  });
  await newCategory.save(); // Save new category to database
  res.status(201).send(newCategory);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  try {
    console.log(`listening to port http://localhost:${PORT}...`);
  } catch (error) {
    console.log("error in connection");
  }
});
