import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const userConfirmation = (msg, callback) => {
    console.log(' @--- User confirmation', msg);
    var data= JSON.parse(msg);
    // Just simple circular logic when links are pressed 
    if (data.allowBack) {
        callback(true);
    } else {
        callback(false);
    }
}

const root = (
    <BrowserRouter getUserConfirmation={userConfirmation} >
        <App />
    </BrowserRouter>
)

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
