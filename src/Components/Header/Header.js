import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header>
        <h1
          style={{
            backgroundColor: "orange",
            height: "100px",
            margin: "auto",
            padding: "100px",
            paddingTop: "50px",
          }}
        >
          Admin panel For Medical Shop
        </h1>
      </header>
      <HeaderCartButton onClick={props.onShow}></HeaderCartButton>
    </div>
  );
};

export default Header;
