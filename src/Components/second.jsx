import React, {Component} from 'react';
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Second extends Component {
    render() {
        return (
            <div>
                <Button className="green button"><Link to={'/first'}>go to next page</Link></Button>
            </div>
        );
    }
}

export default Second;