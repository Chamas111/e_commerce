import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Logo from "../../assets/e-commerce.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className="{classes.title" color="inherit">
            <img
              src={Logo}
              alt="Commerce.js"
              height="25px"
              className="classes.image"
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button} />
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
