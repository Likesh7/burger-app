import React from "react";
import BuildControl from "./buildControl";
import classes from "./buildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(control => {
        console.log(props.disableInfo[control.type]);
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            addIngredientsHandler={() =>
              props.addIngredientsHandler(control.type)
            }
            removeIngredientsHandler={() =>
              props.removeIngredientsHandler(control.type)
            }
            disableInfo={props.disableInfo[control.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchaseHandler}
      >
        order now
      </button>
    </div>
  );
};

export default buildControls;
