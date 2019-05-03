import React, { Fragment } from "react";
import Button from "components/Ui/button";

const orderSummary = props => {
  const arrIngredients = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span> :{" "}
        {props.ingredients[ingKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h2 style={{ textTransform: "capitalize" }}>your order</h2>
      <p>A delicious burger with the following ingredients</p>
      <ul>{arrIngredients}</ul>
      <p>Continue to checkout ?</p>
      <p>
        Total Price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      <Button clicked={props.purchaseContinue} btnType="Success">
        Continue
      </Button>
      <Button clicked={props.purchaseCancel} btnType="Danger">
        Cancel
      </Button>
    </Fragment>
  );
};

export default orderSummary;
