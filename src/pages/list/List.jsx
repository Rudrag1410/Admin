import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/Datatable";
import { userData, productData, blogData } from "../../datatablesource";
import { userListColumns, productColumns, blogColumns } from "../../datacolumn";
import "./List.scss";

const List = () => {
  const location = useLocation();
  const { pathname } = location;
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data based on the route
    let newData = [];

    if (pathname.includes("/users")) {
      newData = userData;
    } else if (pathname.includes("/products")) {
      newData = productData;
    } else if (pathname.includes("/blogs")) {
      newData = blogData;
    }
    console.log("New Data:", newData);

    setData(newData);
  }, [pathname]);

  let title, columns;

  if (pathname.includes("/users")) {
    title = "Users";
    columns = userListColumns;
  } else if (pathname.includes("/products")) {
    title = "Products";
    columns = productColumns;
  } else if (pathname.includes("/blogs")) {
    title = "Blogs";
    columns = blogColumns;
  }

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <DataTable title={title} data={data} columns={columns} addLink />

        <Outlet />
      </div>
    </div>
  );
};

export default List;
