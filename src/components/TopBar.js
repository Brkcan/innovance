import React from 'react';
import { Link } from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import { connect } from 'react-redux';
import { logoutSuccess } from '../redux/authAction';
import { loginSuccess } from '../redux/authAction';

class TopBar extends React.Component {

  render(){
    console.log(this.props);

    const {t} = this.props;
    const  { isLoggedIn,username, onLogoutSuccess ,onLoginSuccess} = this.props;


    let links = (
      <ul className="navbar-nav ml-auto">
        <li>
          <Link className= "nav-link" to="/login" onClick={onLoginSuccess}>
            {t('Login')}
          </Link>
        </li>

      </ul>
    );

    if(isLoggedIn) {
      links = (
        <ul className="navbar-nav ml-auto">
          <li>
            <Link className="nav-link" to={`/user/${username}`}>
              {username}
            </Link>
          </li>
          <li className="nav-link" onClick={onLogoutSuccess} style={{cursor: 'pointer'}}>
            {t('Logout')}
          </li>

        </ul>
      )
    }

    return (
      <div className="shadow-sm bg-light mb-2">
        <nav className="navbar navbar-light container navbar-expand">
          <Link className="navbar-brand" to="/">
            INNOVANCE
          </Link>
          {links}
        </nav>
      </div>
    )
  }
}
const TopBarWithTranslation = withTranslation()(TopBar);
const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn,
    username: store.username,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogoutSuccess: function () {
      return dispatch(logoutSuccess());
    },
    onLoginSuccess: function (){
      return dispatch(loginSuccess());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopBarWithTranslation);
