import axios from "axios";
import { useState } from "react";
import "./AddCategory.css";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setDescription] = useState("");
  const navigate = useNavigate();

  const formHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/add-categories", {
        categoryName,
        categoryDescription,
      });
      setCategory(res.data);
      navigate("/list-category");
    } catch (error) {
      console.log("Error in adding category:", error);
    }
  };

  return (
    <>
      <h2 className="text-center mt-5 text-2xl text-sky-800">Add Category</h2>
      <div className="flex justify-center mt-5 ">
        <div className="card-body bg-slate-200 p-5 ">
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

            <input
              type="submit"
              value="add category"
              className="card-footer bg-sky-800 text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
