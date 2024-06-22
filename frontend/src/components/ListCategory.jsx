// import { Link, NavLink } from "react-router-dom";
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
                  <tr>
                    <td>{cat.categoryName}</td>
                    <td>{cat.categoryDescription}</td>
                    <td>
                      <button className="bg-red-400 px-4 py-1 rounded-md text-white">
                        delete
                      </button>
                    </td>
                    <td>
                      <button className="bg-sky-400 px-4 py-1 rounded-md text-white">
                        edit
                      </button>
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
