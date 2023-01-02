import imgURL from "/Home-background.jpg"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Dataset } from "@mui/icons-material";

interface Playlist {
    id: number,
    imgHref: String,
    title: String,
    href: String,
    owner: String,
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 0 },
    {
        field: 'title',
        headerName: 'Title',
        flex: 30,
        editable: true,
    },
    {
        field: 'owner',
        headerName: 'Owner',
        flex: 30,
        editable: true,
    },
    {
      field: 'href',
      headerName: 'Playlist URL',
      width: 150,
      editable: true,
    },
    {
      field: 'imgHref',
      headerName: 'Image URL',
      type: imgURL,
      width: 150,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

export function Home(): JSX.Element {
    const [rows, setRows] = useState<Playlist[]>([])
    
    useEffect(() => {
        const response = fetch('http://localhost:8080/api/getUserPlaylists')
         .then(response => response.json())
         .catch(error => {
            console.log(error)
         });

        console.log(response.then(data => setRows(data)))

        console.log(rows);
    }, [])


    return (
        <div className='background-img' style={{
            backgroundImage: `url(${imgURL})`
        }}>
            <Box className='title-container' sx={{ height: 400, width: '80%', marginTop: '10%', backgroundColor: 'black', opacity: '80%'}}>
                <DataGrid 
                    sx={{ color: 'white', opacity: '100%' }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    pagination={true} />
            </Box>
        </div>
    )
} 