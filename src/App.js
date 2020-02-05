import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SigninPage from './pages/signinPage';
import MainUserPage from './pages/mainUserPage';
import PlaylistPage from './pages/playlistPage';
import OneSongPage from './pages/onesongPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeUser: null,
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin(user) {
    this.setState({
      activeUser: user
    });
  }

  handleLogout() {
    this.setState({
      activeUser: null
    });
  }

  render() {
    const { activeUser } = this.state;

    return ( 

      <Switch>
        <Route exact path="/">
          <HomePage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route exact path="/login">
          <LoginPage activeUser={activeUser}  handleLogout={this.handleLogout} handleLogin={this.handleLogin} />
        </Route>
        <Route exact path="/signin">
          <SigninPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route exact path="/main">
          <MainUserPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route exact path="/playlist/:id">
          <PlaylistPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route exact path="/onesong">
          <OneSongPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
      </Switch>
    );

  }
}

export default App;
