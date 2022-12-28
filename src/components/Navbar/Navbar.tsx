import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'

export function Navbar(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)

    const links = ['Convert playlists', 'Youtube 2 Spotify', 'Logout']; 

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
            </IconButton>

            <Drawer 
                variant='temporary'
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box width=''>
                    <List>
                        { links.map(link => 
                            <ListItem key={link}>
                                <ListItemButton>
                                    <ListItemText primary={link}>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}