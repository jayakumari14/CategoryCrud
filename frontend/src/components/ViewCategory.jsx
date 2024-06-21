// import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewCategory.css";

const ViewCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log("error in fetching data", error));
  }, []);

  return (
    <>
      <h2 className="text-center mt-5 text-2xl text-sky-800">View Category</h2>
      <div className="flex justify-center mt-5">
        <table className="text-center my_table">
          <tr>
            <th>Category Name</th>
            <th>Category Description</th>
          </tr>

          {category.map((cat) => {
            return (
              <>
                <tr>
                  <td>{cat.categoryName}</td>
                  <td>{cat.categoryDescription}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ViewCategory;
