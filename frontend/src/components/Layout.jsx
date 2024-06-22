import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className=" text-sm text-slate-800 p-3">
        <Link
          to="/category/:id"
          className="mx-1 bg-slate-300 rounded-md px-4 py-2 hover:bg-sky-500 hover:text-white"
        >
          View Category
        </Link>
        <Link
          to="/add-category"
          className="  bg-slate-300 rounded-md px-4 py-2 hover:bg-sky-500 hover:text-white"
        >
          Add Category
        </Link>
        <Link
          to="/edit-category/:id"
          className=" mx-1 bg-slate-300 rounded-md px-4 py-2 hover:bg-sky-500 hover:text-white"
        >
          Edit Category
        </Link>
        <Link
          to="/list-category"
          className=" mx-1 bg-slate-300 rounded-md px-4 py-2 hover:bg-sky-500 hover:text-white"
        >
          List Category
        </Link>
      </div>
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
