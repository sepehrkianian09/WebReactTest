import React, {Component} from "react";
import NamesContainer from "./NamesContainer";
import {Button, Icon, Label} from "semantic-ui-react";
import rowStyle from "../Styles/basicStyle";
import CounterState from "./CounterState";

const maxContainerSize = 5;

class Counter extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div style={rowStyle}>
                <Button onClick={() => this.setState(this.props.incrementValue())} icon>
                    <Icon name='plus circle'/>
                </Button>
                <Button onClick={() => this.setState(this.props.decreaseValue())} disabled={this.props.value === 0}
                        icon>
                    <Icon name='minus circle'/>
                </Button>
                {new NamesContainer({
                    names: this.props.tags,
                    addName: (name) => this.setState(this.props.addTag(name)),
                    deleteName: (index) => this.setState(this.props.delTag(index)),
                }, "", maxContainerSize).render()}
                <Label>{this.props.value === 0 ? 'Zero' : this.props.value}</Label>
            </div>
        );
    }

}

export default Counter;
