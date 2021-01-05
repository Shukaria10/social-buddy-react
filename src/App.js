import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/home">
    <Home></Home>
    </Route>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route path="/postDetail/:postDetailId/">
    <PostDetail></PostDetail>
    </Route>
    <Route path="*">
     <NoMatch></NoMatch>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;