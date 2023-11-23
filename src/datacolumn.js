export const userListColumns = [
   { field: "id", headerName: "ID", width: 70 },
   {
      field: "username",
      headerName: "User",
      width: 150,
   },
   {
      field: "email",
      headerName: "Email",
      width: 150,
   },

   {
      field: "age",
      headerName: "Age",
      width: 150,
   },
   {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
   },
   {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
         return (
            <div className={`cellWithStatus ${params.row.status}`}>
               {params.row.status}
            </div>
         );
      },
   },
];

export const productColumns = [
   { field: "id", headerName: "ID", width: 70 },
   { field: "productName", headerName: "Product Name", width: 180 },
   { field: "price", headerName: "Price", width: 120 },
   {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
         return (
            <div className={`cellWithStatus ${params.row.status}`}>
               {params.row.status}
            </div>
         );
      },
   },
];
export const blogColumns = [
   { field: "id", headerName: "ID", width: 70 },
   { field: "blogname", headerName: "Title", width: 130 },
   { field: "blogcontent", headerName: "Content", width: 400 },
   { field: "blogimg", headerName: "Image", width: 400 },
   // Add other blog-specific columns
];
