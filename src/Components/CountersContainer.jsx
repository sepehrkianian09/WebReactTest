import React, {Component} from 'react';
import {List} from "semantic-ui-react";
import PropTypes from 'prop-types';
import Counter from "./Counter";
import CounterState from "./CounterState";

class CountersContainer extends Component {
    constructor(props, context, counters, maximumSize) {
        super(props, context);
        this.state.counters = counters;
        this.state.maximumSize = maximumSize;
    }

    state = {
        counters: [
            new CounterState([], 0)
        ],
        maximumSize: 5
    }


    render() {
        return (
            <List>
                {this.state.counters.map(((value, index) => this.getCounter(value, index)))}
            </List>
        );
    }

    getCounter(counterState, index) {
        return(
            <Counter tags={counterState.tags} value={counterState.value} />
        )
    }
}

CountersContainer.propTypes = {};

export default CountersContainer;
