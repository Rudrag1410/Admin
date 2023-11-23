import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";

const DataTable = ({ data, columns, addActionColumn, title, addLink }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(data);
  }, [data]);

  const handleDelete = (id) => {
    setRows((prevData) => prevData.filter((item) => item.id !== id));
  };

  const renderActionButtons = (params) => (
    <div className="cellAction">
      <Link
        to={`/${title.toLowerCase()}/${params.row.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="viewButton">View</div>
      </Link>
      {addActionColumn && (
        <div
          className="deleteButton"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </div>
      )}
    </div>
  );

  // Modify existing columns to include the action buttons
  const columnsWithActions = columns.map((col) => ({
    ...col,
    renderCell: (params) =>
      col.field === "action"
        ? renderActionButtons(params)
        : col.renderCell(params),
  }));

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        {addLink && (
          <Link to={`/${title.toLowerCase()}/new`} className="link">
            Add New {title}
          </Link>
        )}
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={addActionColumn ? [...columnsWithActions] : columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
