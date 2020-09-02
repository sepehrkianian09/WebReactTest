import React, {Component} from 'react';
import {Button, Icon, List} from "semantic-ui-react";
import rowStyle from "../Styles/basicStyle";
import getIconButton from "../Functions/BasicFunctions";

class NamesContainer extends Component {
    constructor(props, context, maximumSize) {
        super(props, context);
        this.maximumSize = maximumSize;
    }

    maximumSize;

    render() {
        return (
            <div style={rowStyle}>
                <List bulleted horizontal>
                    {this.props.names.map(this.getNameLabel)}
                </List>
                {this.getPlusButton()}
            </div>
        );
    }

    getNameLabel(name) {
        return (
            <List.Item>
                <List.Content>
                    <List.Header as='a'>{name}</List.Header>
                </List.Content>
                <List.Icon name='arrows alternate' size='large' verticalAlign='middle'/>
            </List.Item>
        );
    }

    getIconButton(iconName, iconFunction) {
        return(
            <Button onClick={iconFunction} icon>
                <Icon name={iconName} />
            </Button>
        )
    }

    getPlusButton() {
        if (this.props.names.length < this.maximumSize) {
            return getIconButton('plus square', this.addName.bind(this))
        }
        return null;
    }

    addName() {
        this.props.addName('Name');
    }
}

export default NamesContainer;
