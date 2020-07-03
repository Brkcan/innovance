import React from 'react';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';

class LoginPage extends React.Component{
  state = {
      username:null,
      display:null,
      password:null,
      passwordRepeat:null,
      errors: {}
  }

  onChange = (event) => {
    const {t} = this.props;
      const { name, value } = event.target;
      const errors = { ...this.state.errors};
      errors[name] = undefined;
      if(name === 'password' || name === 'passwordRepeat'){
       if(name === 'password' && value !== this.state.passwordRepeat){
          errors.passwordRepeat = t('password mismatch');
        }else if(name === 'passwordRepeat' && value !== this.state.password){
          errors.passwordRepeat = t('password mismatch');
        }else {
          errors.passwordRepeat = undefined;
        }
      }
      this.setState({
           [name]:value,
           errors
      })
  }


  render(){
    const {t} = this.props;
    const {errors} = this.state;
    const{password, passwordRepeat} = errors;
    const buttonEnabled = this.state.username && this.state.password;
    return(
      <div className="container">
        <form>
          <h1 className="text-center">{t('Login Page')}</h1>
            <Input name="username" label={t('Username')} onChange={this.onChange}/>
            <Input name="display" label={t('Display Name')} onChange={this.onChange}/>
            <Input name="password" label={t('Password')} error={password} onChange={this.onChange} type="password"/>
            <Input name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeat} onChange={this.onChange} type="password"/>

            <div className="text-center">
            <button className ="btn btn-primary"
              disabled={!buttonEnabled}
              onClick={this.onClickSignup}>
                {t('Login')}
            </button>
            </div>
        </form>
      </div>
    );
  }
}
const LoginPageWithTranslation = withTranslation()(LoginPage);

export default LoginPageWithTranslation;
