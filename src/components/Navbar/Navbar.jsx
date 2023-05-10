import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/e-commerce.png";
import "./styles.css";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <AppBar position="fixed" className="appBar" color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className="title"
          color="inherit"
        >
          <img src={Logo} alt="Commerce.js" height="25px" className="image" />
          Commerce.js
        </Typography>
        <div className="grow" />
        {location.pathname === "/" && (
          <div className="button">
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
