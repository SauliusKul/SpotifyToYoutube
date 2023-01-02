import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const links = ['Convert playlists', 'Youtube 2 Spotify', 'Logout'];

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon color="success" fontSize="large" />
      </IconButton>

      <Drawer variant="temporary" anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box width="">
          <List>
            {links.map((link) => (
              <ListItem key={link} className="drawer-item">
                <ListItemButton href="#">
                  <ListItemText primary={link} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
