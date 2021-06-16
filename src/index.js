import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import ItemView from './ItemView';

import './index.css';

var item;
var rawPrices;
const saveItem = (data, rawPrice) => {
  item = data;
  rawPrices = rawPrice;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/item" render={() => (<ItemView {...item} {...rawPrices} />)} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

export default saveItem;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals