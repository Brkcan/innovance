import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LanguageSelector from './components/LanguageSelector';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <Router>
        <TopBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/user/:username" component={UserPage} />
             <Redirect to="/" />
           </Switch>
      </Router>
      <LanguageSelector />
    </div>
  );
}

export default App;
