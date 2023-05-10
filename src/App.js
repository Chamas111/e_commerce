import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
  };

  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {
      console.log("Error fetching cart: ", error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
    } catch (error) {
      console.log("Error adding to cart: ", error);
    }
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(lineItemId, { quantity });
      setCart(cart);
    } catch (error) {
      console.log("Error updating cart: ", error);
    }
  };

  const handleRemoveFromCart = async (lineItemId) => {
    try {
      const { cart } = await commerce.cart.remove(lineItemId);
      setCart(cart);
    } catch (error) {
      console.log("Error removing from cart: ", error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      console.log("Error emptying cart: ", error);
    }
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
    } catch (error) {
      console.log("Error refreshing cart: ", error);
    }
  };

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
