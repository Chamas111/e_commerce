import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const response = await commerce.cart.add(productId, quantity);
      setCart(response);
    } catch (error) {
      console.log("Error adding to cart: ", error);
    }
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    try {
      const response = await commerce.cart.update(productId, { quantity });
      setCart(response);
    } catch (error) {
      console.log("Error empty the cart: ", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await commerce.cart.remove(productId);
      setCart(response);
    } catch (error) {
      console.log("Error removing the item: ", error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const response = await commerce.cart.empty();
      setCart(response);
    } catch (error) {
      console.log("Error empty the cart: ", error);
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
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                cart={cart}
              />
            }
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
