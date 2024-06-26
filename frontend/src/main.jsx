import React from "react";
import ReactDOM from "react-dom/client";
import AddCategory from "./components/AddCategory";
import EditCategory from "./components/EditCategory";
import ViewCategory from "./components/ViewCategory";
import Layout from "./components/Layout";
import ListCategory from "./components/ListCategory";
// import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/edit-category/:id" element={<EditCategory />} />
      <Route path="/view-category/:id" element={<ViewCategory />} />
      <Route path="/list-category" element={<ListCategory />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
