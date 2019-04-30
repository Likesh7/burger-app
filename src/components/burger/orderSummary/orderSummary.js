import React, { Fragment } from "react";

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
      <p>continue to checkout ?</p>
    </Fragment>
  );
};

export default orderSummary;
