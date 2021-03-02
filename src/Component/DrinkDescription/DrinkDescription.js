import React, {useState, useEffect} from "react";
import axios from "axios";

import {Button} from "react-bootstrap";

import "./DrinkDescription.css";

const DrinkDescription = ({match, history}) => {
  const {id} = match.params;
  const [Drink, setDrink] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setDrink(res.data.drinks))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="main">
      {Drink ? (
        Drink.map((el) => (
          <div key={el.idDrink} className="drink">
            <img
              className="drinkThumber"
              src={el.strDrinkThumb}
              alt="drinkThumber"
            />
            <div className="details">
              <div className="titles">
                <h3>Name:</h3>
                <h3>Category:</h3>

                <h3>Ingredient 1:</h3>
                <h3>Ingredient 2:</h3>
                <h3>Ingredient 3:</h3>
              </div>
              <div className="info">
                <h3>{el.strDrink}</h3>
                <h3>{el.strCategory}</h3>
                <h3>{el.strIngredient1}</h3>
                <h3>{el.strIngredient2}</h3>
                <h3>{el.strIngredient3}</h3>
              </div>
            </div>
          </div>
        ))
      ) : (
        <img
          src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
          alt="loading"
        />
      )}
      <Button onClick={() => history.goBack()}>Go back</Button>
    </div>
  );
};

export default DrinkDescription;
