import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className=" text-lg text-sky-900 bg-slate-100 p-3">
        <Link to={"view-category"} className="mx-3">
          View Category
        </Link>
        <Link to={"add-category"} className="mx-3">
          Add Category
        </Link>
        <Link to={"edit-category"} className="mx-3">
          Edit Category
        </Link>
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
