import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SigninPage from './pages/signinPage';
import PlaylistPage from './pages/playlistPage';
import OneSongPage from './pages/onesongPage';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render() {

    return (

      <Switch>
        <Route exact path="/">
          <HomePage />  {/*activeUser={activeUser} handleLogout={this.handleLogout}*/}
        </Route>
        <Route exact path="/login">
          <LoginPage /> {/*allUsers={allUsers} handleLogin={this.handleLogin}*/}
        </Route>
        <Route exact path="/signin">
          <SigninPage /> {/*allUsers={allUsers} handleLogin={this.handleLogin}*/}
        </Route>
        <Route exact path="/playlist">
          <PlaylistPage />   {/*activeUser={activeUser} recipes={activeUserRecipes} handleLogout={this.handleLogout} handleNewRecipe={this.handleNewRecipe}*/}
        </Route>
        <Route exact path="/onesong">
          <OneSongPage />   {/*activeUser={activeUser} recipes={activeUserRecipes} handleLogout={this.handleLogout} handleNewRecipe={this.handleNewRecipe}*/}
        </Route>
      </Switch>
    );

  }
}

export default App;
