import React, { Fragment } from "react";
import classes from "./backdrop.module.css";

const backdrop = props => {
  return (
    <Fragment>
      {props.purchasing ? (
        <div className={classes.Backdrop} onClick={props.purchaseCancel} />
      ) : null}
    </Fragment>
  );
};

export default backdrop;
