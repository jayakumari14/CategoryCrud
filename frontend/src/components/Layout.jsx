import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <h1 className=" text-center text-4xl text-sky-700">
        Welcome to Category Page!
      </h1>
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
