import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import greenImg from "../assests/logoGreenCrop.png";
import whiteImg from "../assests/whiteLogoFinal.png";

const navLinks = ["Home", "Courses", "Our Team", "Contact"];
const mainGreen = "#066F2D";

const StyledAppBar = styled(AppBar)(({ scrolled }) => ({
  backgroundColor: scrolled ? "#ffffff" : mainGreen,
  color: scrolled ? mainGreen : "#ffffff",
  boxShadow: scrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
  transition: "background-color 0.3s ease, color 0.3s ease",
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const NavLinkBox = styled(Box)({
  display: "flex",
  gap: "2rem",
});

const StyledButton = styled(Button)(({ scrolled }) => ({
  color: scrolled ? mainGreen : "#ffffff",
  textTransform: "none",
  fontWeight: 500,
}));

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed" elevation={0} scrolled={scrolled ? 1 : 0}>
        <StyledToolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            <img
              src={scrolled ? greenImg : whiteImg}
              alt="G-SQUARE Logo"
              style={{
                marginTop:"10px",
                width: "120px",
                height: "50px",
                transition: "all 0.3s ease",
              }}
            />
          </Typography>

          {/* Nav Links (desktop) */}
          {!isMobile && (
            <NavLinkBox>
              {navLinks.map((link) => (
                <StyledButton key={link} scrolled={scrolled ? 1 : 0}>
                  {link}
                </StyledButton>
              ))}
            </NavLinkBox>
          )}

          {/* Menu (mobile) */}
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          )}
        </StyledToolbar>
      </StyledAppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>

      {/* Spacer to push page content below header */}
      <Toolbar />
    </>
  );
}
