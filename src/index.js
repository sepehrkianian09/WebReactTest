import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from "./Components/Counter";
import {Button, Label} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
    /*<React.StrictMode>
      <App />
    </React.StrictMode>*/
    <div>
        <Button className="green">kiir</Button>
        <Counter tags={['fuck', 'shit']} value={5}/>
    </div>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
