import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from "./Components/Counter";
import {Button} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import ChangePageButton from "./Components/changePageButton";
import App from "./app";


ReactDOM.render(
    /*<React.StrictMode>
      <App />
    </React.StrictMode>*/
    <App/>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
