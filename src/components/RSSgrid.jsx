import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const RSSgrid = ({ height, width, rssfeed }) => {
  const [rowData, setRowData] = useState([
    {
      title: 'Strangers Ep1',
      pubDate: new Date(),
      mp3: 'https://www.castingshadow.com/mp3',
    },
  ]);
  let col = [
    {
      headerName: 'Episode title',
      field: 'title',
    },
    {
      headerName: 'Published date',
      field: 'pubDate',
    },
    {
      headerName: 'Episode',
      field: 'mp3',
    },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: height, width: width }}>
      <AgGridReact columnDefs={col} rowData={rowData}></AgGridReact>
    </div>
  );
};

export default RSSgrid;
