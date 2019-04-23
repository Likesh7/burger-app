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
      {controls.map(control => (
        <BuildControl key={control.type} label={control.label} />
      ))}
    </div>
  );
};

export default buildControls;
