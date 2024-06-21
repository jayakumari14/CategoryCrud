// import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
      <table>
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
    </>
  );
};

export default ViewCategory;
