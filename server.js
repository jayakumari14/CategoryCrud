const express = require("express");
const app = express();
const userModel = require("./models/user");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//-------------------------view category-------------------
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await userModel.find();
    res.send(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//-------------------------view single category-------------------
app.get("/api/category/:id", async (req, res) => {
  try {
    const category = await userModel.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//-------------------------add category-------------------
app.post("/api/add-categories", async (req, res) => {
  try {
    const categories = new userModel(req.body);
    const saveCategory = await categories.save();
    res.json(saveCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//-------------------------Update single category-------------------
app.post("/api/update-categories/:id", async (req, res) => {
  try {
    const updateCategory = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updateCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//-------------------------delete category-------------------
app.delete("/api/delete-categories/:id", async (req, res) => {
  try {
    const deleteCategory = await userModel.findByIdAndDelete(req.params.id);
    if (!deleteCategory) {
      return res.status(404).json({ error: "category not found" });
    }
    res.json(deleteCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  try {
    console.log(`listening to port http://localhost:${PORT}...`);
  } catch (error) {
    console.log("error in connection");
  }
});
