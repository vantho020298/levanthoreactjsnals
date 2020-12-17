import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import ListUsers from './ListUsers';
import NavBar from './NavBar';
import SideBar from './SideBar';

function App() {
  return (
    <Router>
        <div class="container-scroller">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/listusers">
              <NavBar />
              <div class="container-fluid page-body-wrapper">
                <SideBar />
                <ListUsers />
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;