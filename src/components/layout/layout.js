import React from 'react';
import Aux from 'hoc';
import styles from './layout.module.css';

const Layout = (props) => {
    return (
        <Aux>
            <div>
                Toolbar, sidebar, backdrop
            </div>
            <main className={styles.content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;


  




