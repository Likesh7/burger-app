import React from "react";
import NavigationItem from "./navigationItem";
import classes from "./navigationItems.module.css";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        burger builder
      </NavigationItem>
      <NavigationItem link="/">authenticate</NavigationItem>
    </ul>
  );
};

export default navigationItems;
