import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './auth/Login';
import Registration from './auth/Registration';
import ListUsers from './user/ListUsers';
import NavBar from './common/NavBar';
import SideBar from './common/SideBar';

class App extends React.Component {
  render() {
    return (
      <Router>
          <div className="container-scroller">
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/registration">
                <Registration />
              </Route>
              <Route exact path="/listusers">
                <NavBar />
                <div className="container-fluid page-body-wrapper">
                  <SideBar />
                  <ListUsers />
                </div>
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}
export default App;