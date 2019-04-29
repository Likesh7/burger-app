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
    </div>
  );
};

export default buildControls;
