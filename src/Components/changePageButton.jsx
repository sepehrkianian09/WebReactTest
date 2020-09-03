import React, {Component} from 'react';
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";


class ChangePageButton extends Component {


    render() {
        return (
            <Button><Link to={'/first'}>go to first</Link></Button>
        );
    }
}

export default ChangePageButton;