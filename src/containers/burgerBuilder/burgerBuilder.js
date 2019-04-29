import Aux from "hoc";
import Burger from "components/burger";
import React, { Component } from "react";
import BuildControls from "components/burger/buildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 1.25,
  bacon: 1.25
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    },
    totalPrice: 4
  };

  addIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldCount + 1;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  };

  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldCount - 1;

    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  };

  render() {
    let disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    console.log(disableInfo);
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientsHandler={this.addIngredientsHandler}
          removeIngredientsHandler={this.removeIngredientsHandler}
          disableInfo={disableInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
