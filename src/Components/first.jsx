import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "semantic-ui-react";
class First extends Component {
    render() {
        return (
            <div>
                <Button className="green button"><Link to={'/second'}>go to next page</Link></Button>
            </div>
        );
    }
}

export default First;