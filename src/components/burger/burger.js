import React from 'react';
import styles from './burger.module.css';
import BurgerIngredients from './burgerIngredients';

const burger = (props) => {
    return(
        <div className={styles.Burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat" />
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}

export default burger;