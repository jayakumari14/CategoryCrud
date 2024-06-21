import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className=" text-sm text-white p-3">
        <Link
          to="/view-category"
          className="mx-1 bg-slate-400 rounded-md px-4 py-2 hover:bg-sky-500"
        >
          View Category
        </Link>
        <Link
          to="/add-category"
          className="  bg-slate-400 rounded-md px-4 py-2 hover:bg-sky-500"
        >
          Add Category
        </Link>
        <Link
          to="/edit-category"
          className=" mx-1 bg-slate-400 rounded-md px-4 py-2 hover:bg-sky-500"
        >
          Edit Category
        </Link>
      </div>
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
