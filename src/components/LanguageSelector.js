import React from 'react';
import { withTranslation } from 'react-i18next';


const LanguageSelector = (props) => {

const onChangeLanguage = language => {
    const {i18n} = props;
    i18n.changeLanguage(language);
  }

  return(
    <div className="container">
      <img src="https://www.countryflags.io/tr/flat/24.png"
       onClick={() => onChangeLanguage('tr')}
       style={{cursor: 'pointer'}}></img>
      <img src="https://www.countryflags.io/us/flat/24.png"
       onClick={() => onChangeLanguage('en')}
       style={{cursor: 'pointer'}}></img>
    </div>
  )
}

export default withTranslation()(LanguageSelector);
