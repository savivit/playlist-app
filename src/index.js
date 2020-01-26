import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import Parse from 'parse'

// Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Parse.initialize(
//   '7OUftqIYhgim2l1Vi6zcVBOJIHHStPS8Pp0es2VY', // This is your Application ID
//   'Fl1rn0FTCeHa1zyBLHtVrxMKf0QtG8sDwd6Ebkvm' // This is your Javascript key
// );


Parse.initialize("KmLQVmK3lgClTDZyHzOfjM0pZc5j4ehCI7rf7zL8", "JdpeXg6Li3XFae43HWkHWZYqmSKcwQpy0O9tublL");
Parse.serverURL = 'https://parseapi.back4app.com/';


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
