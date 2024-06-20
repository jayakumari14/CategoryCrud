import { Link, NavLink } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

const ViewCategory = () => {
  // useEffect(() => {
  //   axios.get("/view-category");
  // }, []);

  return (
    <>
      <nav className="bg-slate-300 p-5 w-100 m-2">
        <ul className="flex justify-between">
          <li className="text-3xl text-gray-700 flex justify-around gap-2">
            Category
            <Link to="add-category" className="text-xl text-green-700 ">
              Add Category
            </Link>
            <Link to="view-category" className="text-xl text-blue-700 ">
              View Category
            </Link>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `
            block py-2 pr-4 pl-3 hover:text-orange-700 ${
              isActive ? "text-orange-700" : "text-gray-600"
            }
            `}
            >
              <button className="bg-white text-black px-4 py-2 rounded-md ">
                Login
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ViewCategory;
