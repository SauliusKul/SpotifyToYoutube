import imgURL from '/Home-background.jpg';
import { DataGrid, GridColDef, GridSelectionModel,  } from '@mui/x-data-grid';
import { Box, colors } from '@mui/material';
import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { CheckBox } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';

interface Playlist {
  id: number;
  imgHref: string;
  title: string;
  href: string;
  owner: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 6 },
  {
    field: 'title',
    headerName: 'Title',
    flex: 30,
    editable: true
  },
  {
    field: 'owner',
    headerName: 'Owner',
    flex: 30,
    editable: true
  },
  {
    field: 'imgHref',
    headerName: 'Cover',
    type: imgURL,
    renderCell: (params) => <img width={59} height={59} src={params.value} />, // renderCell will render the component
    flex: 10
  },
  {
    field: 'href',
    headerName: 'Playlist URL',
    flex: 17,
    editable: true
  },
];


export function Home(): JSX.Element {
  const [selectedPlaylists, setSelectedPlaylists] = useState<GridSelectionModel>([])
  const [rows, setRows] = useState<Playlist[]>([]);
  const pageSize = 10;
  const cellHeight = 60;

  useEffect(() => {
    const response = fetch('http://localhost:8080/api/getUserPlaylists')
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });

    console.log(response.then((data) => setRows(data)));
  }, []);

  const handlePlaylistConversion = () => {

  }

  return (
    <div
      className="background-img"
      style={{
        backgroundImage: `url(${imgURL})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}>
      <Box
        className='playlist-display-container'
        height={(pageSize + 2) * 52.5}
        color='white'
      >
        <DataGrid
          sx={{ color: 'white', opacity: '100%' }}
          rowHeight={cellHeight}
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          pagination={true}
          disableSelectionOnClick
          checkboxSelection
          onSelectionModelChange={(playlistIds) => setSelectedPlaylists(playlistIds)}
        />
        <div className='convert-button-wrapper'>
          <button
            className='convert-button'
            onClick={handlePlaylistConversion}
          >
            Convert selected
          </button>
        </div>
      </Box>
    </div>
  );
}
