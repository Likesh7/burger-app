import React, { Fragment } from "react";
import classes from "./modal.module.css";
import Backdrop from "components/Ui//backdrop";

const modal = props => {
  return (
    <Fragment>
      <Backdrop
        purchasing={props.purchasing}
        purchaseCancel={props.purchaseCancel}
      />
      <div
        className={classes.Modal}
        style={{
          transform: props.purchasing ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.purchasing ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default modal;
