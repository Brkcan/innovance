import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Form from './pages/Form';
import LanguageSelector from './components/LanguageSelector';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import TopBar from './components/TopBar';
import { connect } from 'react-redux';

const App = (props) =>  {

  const [isLoggedIn, setIsloggedIn] = useState();
  const [username, setUsername] = useState()
    // state = {
    //   isLoggedIn: true,
    //   username: 'user1',
    // }
    //  onLoginSuccess={this.onLoginSuccess}
    // const {isLoggedIn, username} = this.state;
  return (
    <div>
      <Router>
        <TopBar/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/form" component={Form} />
            <Route path="/login" component={(props) => {
                return <LoginPage {...props} />
            }} />
            <Route path="/user/:username" component={props => {
                return <UserPage {...props} username={username} />
            }} />
             <Redirect to="/" />
           </Switch>
      </Router>
      <LanguageSelector />
    </div>
    );
  }

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn,
  }
}
export default connect(mapStateToProps)(App);
