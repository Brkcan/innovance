import React from 'react';
import { Link } from 'react-router-dom';
import {withTranslation} from 'react-i18next';

class TopBar extends React.Component {

  render(){
    const {t} = this.props;
    return (
      <div className="shadow-sm bg-light mb-2">
        <nav className="navbar navbar-light container navbar-expand">
          <Link className="navbar-brand" to="/">
            INNOVANCE
          </Link>
          <ul className="navbar-nav ml-auto">
            <li>
              <Link className="nav-link" to="/login">
                {t('Login')}
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    )
  }
}

export default withTranslation()(TopBar);
