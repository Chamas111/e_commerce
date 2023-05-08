import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes.",
    price: "$50",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "$1200",
    image:
      "https://www.cnet.com/a/img/resize/2af51dd9015bec1239b4aafa4d491c37206a0bf0/hub/2015/04/07/b35f1174-696c-4d25-8a4f-fa16a2842338/macbook-air-gold-2015-16.jpg?auto=webp&fit=crop&height=900&width=1200",
  },
];
const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
