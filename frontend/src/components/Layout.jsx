import ViewCategory from "./ViewCategory";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ViewCategory />
      <Outlet />
    </>
  );
};

export default Layout;
