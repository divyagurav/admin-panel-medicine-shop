import React from "react";

const MedicineList = (props) => {
  // const cartCtx = useContext(CartContext);
  const submitHandler = () => {
    props.lists.map((list) => {
      const data = {
        id: list.id,
        name: list.name,
        description: list.description,
        price: list.price,
      };

      console.log(data);
      props.getValues(data);

      fetch(
        "https://react-http-8802f-default-rtdb.firebaseio.com//medicineCart.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });

    // cartCtx.addItem({
    //   name: lists.name,
    //   description: lists.description,
    //   price: lists.price,
    // });
  };
  const List = props.lists.map((list) => (
    <ul>
      <li
        key={list.price}
        style={{
          borderStyle: "none",
          borderWidth: "medium",
          backgroundColor: "orange",

          padding: "5px",
          width: "500px",
          margin: "auto",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >{`MedicineName:${list.name} description:${list.description} price:${list.price}`}</li>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "4px",
        }}
        onClick={submitHandler}
      >
        Add To Cart
      </button>
    </ul>
  ));
  return <div>{List}</div>;
};

export default MedicineList;
