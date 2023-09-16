import React from "react";

const Cart = (props) => {
  // const cartCtx = useContext(CartContext);

  const Items = props.items.map((item) => (
    <ul>
      <li>{`medicineName:${item.name} description:${item.description} price:${item.price}`}</li>
    </ul>
  ));
  return (
    <div
      className="card"
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        width: "500px",
        margin: "auto",
        position: "absolute",
        top: "18%",
        right: "3%",
      }}
    >
      <h1>Cart</h1>
      {Items}
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          width: "60px",
          margin: "auto",
          height: "30px",
          borderRadius: "8rem",
        }}
        onClick={props.onHide}
      >
        Close
      </button>
    </div>
  );
};

export default Cart;
