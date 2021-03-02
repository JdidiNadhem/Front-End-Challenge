import React, {useEffect, useState} from "react";

import axios from "axios";
import Drink from "../Drink/Drink";

import "./DrinkList.css";

const DrinkList = () => {
  const [Drinks, setDrinks] = useState(null);

  const GetData = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => setDrinks(res.data.drinks))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="drinklist">
      {Drinks ? (
        Drinks.map((el) => <Drink key={el.idDrink} drink={el} />)
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
