import "./App.css";
import Header from "./Components/Header/Header";
import InputForm from "./Components/Input/InputForm";
import MedicineList from "./Components/MedicineList";
import React, { useEffect, useState } from "react";
import Cart from "./Components/Cart";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [cartValues, setCartValues] = useState([]);
  const [isShown, setCartIsShown] = useState(false);
  const [movie, setMovie] = useState([]);
  const [cart, setCart] = useState([]);

  const inputFormData = (data) => {
    const listdata = {
      name: data.name,
      description: data.description,
      price: data.price,
    };
    console.log(listdata);
    setMedicines((prev) => {
      return [
        ...prev,
        {
          id: data.id,
          name: data.name,
          description: data.description,
          price: data.price,
        },
      ];
    });
  };

  const getCartValues = (value) => {
    setCartValues((prev) => {
      return [
        ...prev,
        {
          is: value.id,
          name: value.name,
          description: value.description,
          price: value.price,
        },
      ];
    });
  };
  async function fetchData() {
    const response = await fetch(
      "https://react-http-8802f-default-rtdb.firebaseio.com//medicine.json"
    );
    const data = await response.json();

    const loadedMovies = [];

    for (const key in data) {
      loadedMovies.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMovie(loadedMovies);
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function fetchCart() {
    const response = await fetch(
      "https://react-http-8802f-default-rtdb.firebaseio.com//medicineCart.json"
    );
    const data = await response.json();

    const loadedMovies = [];

    for (const key in data) {
      loadedMovies.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setCart(loadedMovies);
  }

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <Header onShow={showCartHandler}></Header>
      <InputForm getData={inputFormData}></InputForm>
      <MedicineList lists={movie} getValues={getCartValues}></MedicineList>
      {isShown && <Cart items={cart} onHide={hideCartHandler}></Cart>}
    </div>
  );
}

export default App;
