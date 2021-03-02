import React, {useEffect, useState} from "react";
import {InputGroup, FormControl} from "react-bootstrap";
import axios from "axios";
import Drink from "../Drink/Drink";

import "./DrinkList.css";

const DrinkList = () => {
  const [Drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("a");

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => setDrinks(res.data.drinks))
      .catch((err) => console.error(err));
  }, [search]);
  return (
    <div className="drinklist">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter coctail name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) =>
            e.target.value ? setSearch(e.target.value) : setSearch("a")
          }
        />
      </InputGroup>
      {Drinks ? (
        Drinks.map((el) => <Drink key={el.idDrink} drink={el} />)
      ) : Drinks === null ? (
        <h2>Product Not Found</h2>
      ) : (
        <img
          src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
          alt="loading"
        />
      )}
    </div>
  );
};

export default DrinkList;
