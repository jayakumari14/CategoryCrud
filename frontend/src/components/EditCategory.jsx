import axios from "axios";
import { useState, useEffect } from "react";
import "./AddCategory.css";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setDescription] = useState("");
  // const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCategory();
  }, [id]);

  // const { categoryName, categoryDescription } = category;

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/category/` + id);
      setCategoryName(res.data.categoryName);
      setDescription(res.data.categoryDescription);
    } catch (error) {
      console.log("error in displaying single category");
    }
  };

  const formUpdateHandler = async () => {
    const datas = {
      categoryName: categoryName,
      categoryDescription: categoryDescription,
    };
    console.log("datas", datas);
    try {
      await axios.put(
        `http://localhost:3000/api/update-categories/` + id,
        datas
      );
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <h2 className="text-center mt-5 text-2xl text-sky-800">Edit Category</h2>
      <div className="flex justify-center mt-5 ">
        <div className="card-body bg-slate-200 p-5 ">
          <form onSubmit={formUpdateHandler}>
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
              value="Update category"
              className="card-footer bg-sky-800 text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
