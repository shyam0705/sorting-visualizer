import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BubbleMain from './BubbleMainComponent';
import SelectionMain from './SelectionMainComponent';
import Header from './HeaderComponent.js';
import InsertionMain from './InsertionMainComponent.js';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="https://shyam0705.github.io/bubblesort">
                        <BubbleMain />
                    </Route>
                    <Route path="https://shyam0705.github.io/bubblesort">
                        <SelectionMain />
                    </Route>
                    <Route path="https://shyam0705.github.io/bubblesort">
                        <InsertionMain />
                    </Route>
                </Switch>
            </div>
            )
    }
}
export default Main;