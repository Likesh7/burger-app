import React from "react";
import Aux from "hoc";
import styles from "./layout.module.css";
import Toolbar from "components/navigation/toolbar";

const Layout = props => {
  return (
    <Aux>
      <Toolbar />

      <main className={styles.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
