import React from 'react';
import { Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { styled, useTheme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import EventIcon from '@mui/icons-material/Event';
import { Theme, CSSObject } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 240; // Breite der Menu wenn öffen

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const Menu = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface LeftMenuProps {
  open: boolean;
  drawerClose: () => void;
}
const LeftMenu = ({ open, drawerClose }: LeftMenuProps) => {
  const theme = useTheme();

  return (
    <Menu variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={drawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link to="/home">
          <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
        <Link to="/createMeeting">
          <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Meeting erstellen" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </List>
    </Menu>
  );
};

export default LeftMenu;
