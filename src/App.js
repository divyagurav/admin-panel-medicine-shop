import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(parseFloat(event.target.value));
  };

  const handleAddItem = () => {
    const newItem = { name, quantity, price };
    setItems([...items, newItem]);
    setName("");

    setQuantity("");
    setPrice("");

    axios
      .post(
        "https://crudcrud.com/api/f42365e3a6fd4a0197b130ccfcce58e2/cart",
        newItem
      )
      .then((res) => console.log(res));
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const fetchData = () => {
    axios
      .get('"https://crudcrud.com/api/f42365e3a6fd4a0197b130ccfcce58e2/cart"')
      .then((res) => {});
  };

  return (
    <div>
      <h1 className="navbar">Admin Panel for Medicine Shop Sellers</h1>
      <div className="app-container">
        <div className="form-container">
          <div>
            <label>Medecine Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <ul className="items-list">
          {items.map((item, index) => (
            <li key={index}>
              medicinename:{item.name} Description:{item.quantity} Price:₹
              {item.price}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
        <div className="cart-container">
          <button onClick={handleCartClick}> Cart ({cartItems.length})</button>
          {showCart && <Cart items={cartItems} onClose={handleCloseCart} />}
        </div>
      </div>
    </div>
  );
}

function Cart({ items, onClose }) {
  const totalAmount = items.map((item) => item.price);

  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <ul className="cart-items-list">
        {items.map((item, index) => (
          <li key={index}>
            MedicineName={item.name} :Description={item.quantity} Price=₹
            {item.price}
          </li>
        ))}
      </ul>
      <div>
        <span>
          <h2>Total Amount={totalAmount}</h2>
        </span>
      </div>
    </div>
  );
}

export default App;
