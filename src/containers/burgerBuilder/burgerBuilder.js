import React, { Component } from 'react';

import Aux from 'hoc';

import Burger from 'components/burger';

class BurgerBuilder extends Component {
    render() {
        return(
            <Aux>
                <Burger />
                <div>Burger Builder</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;