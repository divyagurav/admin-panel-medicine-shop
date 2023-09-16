import React from "react";
//import CartContext from "../cart-context";

const HeaderCartButton = (props) => {
  // const cartCtx = useContext(CartContext);
  // const numberOfCartItems = props.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;

  // }, 0);

  return (
    <div>
      <button
        style={{
          position: "absolute",
          top: "4%",
          right: "2%",
          margin: "0",
          backgroundColor: "black",
          color: "white",
          width: "50px",
          borderRadius: "8px",
        }}
        onClick={props.onClick}
      >
        <h6>Cart</h6>
        <p>0</p>
      </button>
    </div>
  );
};

export default HeaderCartButton;
