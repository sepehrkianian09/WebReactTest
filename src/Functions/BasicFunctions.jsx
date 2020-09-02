import React from 'react';
import {Button, Icon} from "semantic-ui-react";

function getIconButton(iconName, iconFunction) {
    return(
        <Button onClick={iconFunction} icon>
            <Icon name={iconName} />
        </Button>
    )
}

export default getIconButton;
