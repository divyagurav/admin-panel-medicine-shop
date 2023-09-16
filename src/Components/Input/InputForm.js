import React, { useState } from "react";

//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";

const InputForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      id: Math.random().toString(),
      name: name,
      description: description,
      price: price,
    };
    props.getData(inputData);
    console.log(inputData);
    fetch(
      "https://react-http-8802f-default-rtdb.firebaseio.com//medicine.json",
      {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div
      class="card"
      style={{
        width: "30rem",
        margin: "auto",
        marginTop: "20px",
        backgroundColor: "orange",
        height: "auto",
      }}
    >
      {/* <Card
        style={{
          width: "20rem",
          backgroundColor: "orange",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Medicine Name:</Form.Label>
              <Form.Control
                onChange={nameInputHandler}
                type="text"
              ></Form.Control>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                onChange={descriptionHandler}
                type="text"
              ></Form.Control>
              <Form.Label>Price:</Form.Label>
              <Form.Control
                onChange={priceHandler}
                type="number"
              ></Form.Control>
              <br></br>

              <Button variant="dark" onSubmit={submitHandler}>
                Add Product
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card> */}
      <div class="card.body">
        <form onSubmit={submitHandler}>
          <label style={{ margin: "10px" }}>Medicine Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={nameInputHandler}
          ></input>
          <label style={{ margin: "10px" }}>Description:</label>
          <input
            type="text"
            class="form-control"
            value={description}
            onChange={descriptionHandler}
          ></input>
          <label style={{ margin: "10px" }}>Price:</label>
          <input
            type="number"
            class="form-control"
            value={price}
            onChange={priceHandler}
          ></input>
          <br></br>
          <button style={{ backgroundColor: "black", color: "white" }}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
