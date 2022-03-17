import React, { MouseEvent } from 'react';
import { useMsal } from '@azure/msal-react';
import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const AppHeader = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
interface AppBarProps {
  open?: boolean;
  drawerOpen?: () => void;
}
const Header = ({ open, drawerOpen }: AppBarProps) => {
  const userProfile = useSelector((state: RootState) => state.user.userProfile);
  const { instance } = useMsal();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const openBasicMenu = Boolean(anchorEl);
  const handleClick = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    instance
      .logoutRedirect()
      .then(() => navigate('/login'))
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <AppHeader position="fixed" open={open}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={drawerOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        <Button
          startIcon={<Avatar alt={userProfile?.displayName} src="/static/images/avatar/2.jpg" />}
          variant="text"
          color="secondary"
          id="basic-button"
          aria-controls={openBasicMenu ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openBasicMenu ? 'true' : undefined}
          onClick={handleClick}
        >
          {userProfile?.displayName}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openBasicMenu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppHeader>
  );
};

export default Header;
