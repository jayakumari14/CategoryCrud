import ViewCategory from "./ViewCategory";
import { Outlet } from "react-router-dom";
import AddCategory from "./AddCategory";

const Layout = () => {
  return (
    <>
      <ViewCategory />
      <Outlet />
      <AddCategory />
    </>
  );
};

export default Layout;
