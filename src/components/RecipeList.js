import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        return ( 
            <React.Fragment>
                <h1>Hello From RecipeList</h1>
                <Recipe/>
            </React.Fragment>
        );
    }
}
