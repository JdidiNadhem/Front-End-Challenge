import React from "react";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
const Drink = ({drink}) => {
  return (
    <Card style={{width: "18rem"}}>
      <Card.Title>{drink.strDrink}</Card.Title>
      <Card.Img variant="top" src={drink.strDrinkThumb} />
      <Card.Body>
        <Link
          to={{
            pathname: `/DrinkDescription/${drink.idDrink}`,
          }}
        >
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Drink;
