import { AppBar, Badge, Button, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { PersonAdd, Settings, Logout, Mail } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentUser,
  logOutUser,
  isUserSignedIn,
} from "../../../redux/slices/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function HeaderMenu() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(isUserSignedIn);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElMainMenu, setAnchorElMainMenu] =
    useState<null | HTMLElement>(null);
  const mainMenuOpen = Boolean(anchorElMainMenu);
  const handleMainMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMainMenu(event.currentTarget);
  };
  const handleMainMenuClose = () => {
    setAnchorElMainMenu(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMainMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorElMainMenu}
              open={mainMenuOpen}
              onClose={handleMainMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleMainMenuClose();
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMainMenuClose();
                  navigate("/transfers");
                }}
              >
                Transfers
              </MenuItem>
              <MenuItem onClick={handleMainMenuClose}>Crew</MenuItem>
            </Menu>
            <Typography
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
              onClick={() => {
                navigate("/");
              }}
            >
              Constellation
            </Typography>
            {isAuthenticated ? (
              <>
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 36, height: 36 }}>
                      {currentUser.fname.substring(0, 1) +
                        currentUser.lname.substring(0, 1)}
                    </Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{
                    horizontal: "right",
                    vertical: "top",
                  }}
                  anchorOrigin={{
                    horizontal: "right",
                    vertical: "bottom",
                  }}
                >
                  <MenuItem onClick={() => navigate("/myAccount")}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(logOutUser());
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default HeaderMenu;
