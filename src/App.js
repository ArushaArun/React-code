import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Switch>
        <Route path="/cart" component={Cart} /> 
        <Route path="/details" component={Details} />
        <Route path="/" component={ProductList} />
        <Route default component={Default} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

