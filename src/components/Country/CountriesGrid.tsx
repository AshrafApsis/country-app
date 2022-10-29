import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "flag", headerName: "FLAG", width: 150 },
  { field: "country", headerName: "COUNTRY", width:250, },
  { field: "population", headerName: "POPULATION", width: 150 },
  { field: "region", headerName: "REGION", width: 150 },
  { field: "capital", headerName: "CAPITAL", width: 150 },
];



export interface CountryProps {
  id: number;
  flag: string;
  country: string;
  population: number;
  region: string;
  capital: string;
}

export default function DataGridDemo({
  countryList,
}: {
  countryList: CountryProps[];
}) {
  const [pageSize, setPageSize] = useState<number>(25);

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={countryList}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 15, 25, 50, 100]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight={true}
        editMode="row"
        loading = {countryList.length === 0 ? true : false}
        onPageSizeChange={(pageSize) => {
        setPageSize(pageSize);
        
    }}
   
      />
    </Box>
  );
}
