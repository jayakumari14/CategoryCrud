import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewCategory = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const { categoryName, categoryDescription } = category;

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/category/` + id);
      setCategory(res.data);
    } catch (error) {
      console.log("error in displaying single category");
    }
  };

  return (
    <>
      <div className="text-center mt-10 text-blue-600">
        {categoryName}---{categoryDescription}
      </div>
    </>
  );
};

export default ViewCategory;
