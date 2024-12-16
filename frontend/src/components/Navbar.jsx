import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "1.5rem" }}
        >
          <Link to="/"> Tickit </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              borderBottom: isActive ? "3px solid blue " : "none",
            })}
          >
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            to="/AddTopic"
            style={({ isActive }) => ({
              textDecoration: "none",
              borderBottom: isActive ? "3px solid blue" : "none",
            })}
          >
            <Button color="inherit">Add Topic</Button>
          </NavLink>
          <NavLink
            to="/ProjectDetails"
            style={({ isActive }) => ({
              textDecoration: "none",
              borderBottom: isActive ? "px solid blue" : "none",
            })}
          >
            <Button color="inherit">Project Details</Button>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
