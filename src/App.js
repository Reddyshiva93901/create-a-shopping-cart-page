import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="ProductList">
        {products.map((product) => (
          <div key={product.id} className="Product">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="Cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="CartItem">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <p className="Total">Total: ${getTotal()}</p>
            <button>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
