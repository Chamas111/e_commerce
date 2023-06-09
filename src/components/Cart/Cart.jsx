import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

import "./styles.css";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  console.log("fffffffff", cart);
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" className="link">
        start adding some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              item={item}
            />
          </Grid>
        ))}
      </Grid>
      <div className="cardDetails">
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className="emptyButton"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          &nbsp;&nbsp;
          <Button
            className="checkoutButton"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
            sx={{ size: "small" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <Container>
      <div className="toolbar" />
      <Typography
        className="title"
        variant="h3"
        gutterBottom
        sx={{ fontSize: 24, fontWeight: "bold" }}
      >
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? EmptyCart() : FilledCart()}
    </Container>
  );
};

export default Cart;
