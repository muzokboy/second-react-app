/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { Link } from "react";
import "./index.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../../assets/navbar-logo.svg";
import Grid from "@mui/material/Grid";
const pages = ["SERVICES", "PORTFOLIO", "ABOUT", "TEAM", "CONTACT"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isScroll, setIsScroll] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 220) {
        setIsScroll(true);
        // alert(`${window.scrollY}`);
      } else {
        setIsScroll(false);
        // alert(`${window.scrollY}`);
      }
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        id="navbar"
        position="fixed"
        sx={{
          background: "none",
          boxShadow: "none",
          backgroundColor: isScroll ? "#212529" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                // marginLeft: "40%",
                justifyContent: "space-between",
              }}
            >
              <img style={{ width: "140px" }} src={Logo} alt="image_1" />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                // marginLeft: `46%`,
                justifyContent: "space-between",
              }}
            >
              <a href="navbar">
                <img
                  src={Logo}
                  alt="_image"
                  width={isScroll ? "150px" : "200px"}
                  // style={{
                  //   display: isScroll ? "none" : "block",
                  // }}
                />
              </a>
              <Grid>
                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}

                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#DBA717",
                    }}
                    href="#services"
                  >
                    services
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      ":hover": { color: "red" },
                    }}
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#about"
                  >
                    About
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#team"
                  >
                    Team
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#contact"
                  >
                    Contact
                  </a>
                </Button>
                {/* </Link> */}
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
