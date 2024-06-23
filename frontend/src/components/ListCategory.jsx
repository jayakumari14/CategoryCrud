import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ListCategory.css";

const ListCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => {
        setCategory(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log("error in fetching data", error));
  }, []);

  const deleteCategory = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/delete-categories/${id}`
      );
      setCategory((prevCategories) =>
        prevCategories.filter((category) => category._id !== id)
      );
      console.log(res.data);
    } catch (error) {
      console.log("Error in deleting category:", error);
    }
  };

  return (
    <>
      <h2 className="text-center mt-5 text-2xl text-sky-800">List Category</h2>
      <div className="flex justify-center mt-5  ">
        <table className="text-center rounded-md ">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Category Description</th>
              <th>Actions</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          {category.map((cat) => {
            return (
              <>
                <tbody>
                  <tr key={cat._id}>
                    <td>{cat.categoryName}</td>
                    <td>{cat.categoryDescription}</td>
                    <td>
                      <button
                        className="bg-red-400 px-4 py-1 rounded-md text-white"
                        onClick={() => deleteCategory(cat._id)}
                      >
                        delete
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/view-category/${cat._id}`}
                        className="bg-pink-400 px-4 py-1 rounded-md text-white"
                      >
                        View
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/edit-category/${cat._id}`}
                        className="bg-sky-400 px-4 py-1 rounded-md text-white"
                      >
                        edit
                      </Link>
                    </td>
                    <td>
                      <button className="bg-yellow-400 px-4 py-1 rounded-md text-white">
                        update
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ListCategory;
