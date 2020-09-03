import React, {Component} from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import First from "./Components/first";
import Second from "./Components/second";
import ChangePageButton from "./Components/changePageButton";
import Counter from "./Components/Counter";


class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/first">
                    <h1>ridam roo first</h1>
                    <First/>
                </Route>
                <Route path="/second">
                    <p>klsjdfklsdjfkljsd</p>
                    <Second/>
                </Route>
            </Router>
        );
    }
}

export default App;