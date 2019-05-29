import React from "react";
import classes from "./toolbar.module..css";
import Logo from "components/logo";
import NavigationItems from "components/navigation/navigationItems";

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
