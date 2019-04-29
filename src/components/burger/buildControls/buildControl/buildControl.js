import React from "react";
import classes from "./buildControl.module.css";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removeIngredientsHandler}
        disabled={props.disableInfo}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.addIngredientsHandler}>
        More
      </button>
    </div>
  );
};

export default buildControl;
