import axios from "axios";
import { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setDescription] = useState("");

  const formHandler = () => {
    axios
      .post("http://localhost:3000/api/add-categories")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log("error in fetching data", error));
  };

  return (
    <>
      <div>
        <form onSubmit={formHandler}>
          <label> Category Name: </label>
          <input
            type="text"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <label> Category Description: </label>
          <input
            type="text"
            name="categoryDescription"
            value={categoryDescription}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="submit" value="add category" />
        </form>
      </div>
    </>
  );
};

export default AddCategory;
