import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import List from './components/List';
import {Switch,Route} from 'react-router-dom';
import Cart from './components/Cart';
import Details from './components/Details';
import NoPage from './components/NoPage';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={List}/>
        <Route exact path="/details/:userId/:status" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={NoPage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
