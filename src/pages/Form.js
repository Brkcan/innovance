import React from 'react';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';

class Form extends React.Component {

  state = {
    firstName: null,
    firsNameError: "",

    lastName: null,
    lastNameError: "",

    username:null,
    usernameError: "",

    city:null,
    cityError: "",

    state:null,
    stateError: "",

    zip:null,
    zipError: "",
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
}
validate = () => {
  let firsNameError = "";
  let lastNameError = "";
  let usernameError = "";
  let cityError = "";
  let stateError = "";
  let zipError = "";

  if(this.state.firstName === '' && this.state.firstName === null){
    firsNameError = "İsim bos olamaz";
  }


  if(firsNameError){
    this.setState({
      firsNameError,
      usernameError,
    })
  }
}
onSubmit = (event) => {
  event.preventDefault();
  const isValid = this.validate();

  if(isValid) {
    console.log(this.state);
  }
}
  render (){
    const {t} = this.props;
  return(
    <div className="container">
    <form className="needs-validation" onSubmit={this.onSubmit} novalidate>
    <div className="form-row">
    <div className="col-md-4 mb-3">
      <label for="validationCustom01">{t('First name')}</label>
      <input type="text" name="firstName"
      className="form-control" id="validationCustom01"
      placeholder={t('First name')}  required/>
      <div style={{fontSize: 12, color:"red"}}>
        {this.state.firsNameError}
      </div>
      <div className="valid-feedback was-validated">
        {t('Looks good!')}
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationCustom02">{t('Last name')}</label>
      <input type="text" name="lastName"
      className="form-control" id="validationCustom02"
      placeholder={t('Last name')}  required/>
      <div style={{fontSize: 12, color:"red"}}>
        {this.state.lastNameError}
      </div>
      <div className="valid-feedback">
        {t('Looks good!')}
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationCustomUsername">{t('Username')}</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" name="username"
        className="form-control" id="validationCustomUsername"
         placeholder={t('Username')}
         aria-describedby="inputGroupPrepend" required />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.usernameError}
        </div>
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom03">{t('City')}</label>
      <input type="text" name="city"
      className="form-control" id="validationCustom03"
      placeholder={t('City')} required />
      <div style={{fontSize: 12, color:"red"}}>
        {this.state.cityError}
      </div>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationCustom04">{t('State')}</label>
      <input type="text" name="state"
       className="form-control" id="validationCustom04"
       placeholder={t('State')} required />
      <div style={{fontSize: 12, color:"red"}}>
        {this.state.stateError}
      </div>
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationCustom05">{t('Zip')}</label>
      <input type="text" name="zip"
      className="form-control" id="validationCustom05"
      placeholder={t('Zip')}  required/>
      <div style={{fontSize: 12, color:"red"}}>
        {this.state.zipError}
      </div>
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input"
      type="checkbox" value="" id="invalidCheck"  required/>
      <label className="form-check-label" for="invalidCheck">
        {t('Agree to terms and conditions')}
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
</div>
    )
  }
};
export default withTranslation()(Form);
