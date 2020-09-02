import React, {Component} from "react";
import NamesContainer from "./NamesContainer";
import {Button, Icon, Label} from "semantic-ui-react";
import rowStyle from "../Styles/basicStyle";

const maxContainerSize = 5;

class Counter extends Component {
    constructor(props, context) {
        super(props, context);
        this.state.tags = props.tags;
        this.state.value = props.value;
    }


    state = {
        tags: [],
        value: 0,
        addTag(tag) {
            (this.tags)[this.tags.length] = tag;
            return this;
        }
    }

    render() {
        return (
            <div style={rowStyle}>
                {this.getIconButton('plus circle', null)}
                {this.getIconButton('minus circle', null)}
                {new NamesContainer({names: this.state.tags, addName: this.addName.bind(this)}, "", maxContainerSize).render()}
                <Label className={this.state.value === 0 ? "warning" : ""}>{this.state.value === 0 ? 'Zero' : this.state.value}</Label>
            </div>
        );
    }

    addName(name) {
        this.setState(this.state.addTag(name))
    }

    getIconButton(iconName, iconFunction) {
        return(
            <Button onClick={iconFunction} icon>
                <Icon name={iconName} />
            </Button>
        )
    }

}

export default Counter;
