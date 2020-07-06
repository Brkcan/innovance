import React, {useState} from 'react';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

const LoginPage = (props) => {

  const [form, setForm] = useState({
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null
  })

  const [errors, setErrors] = useState({});


  const onChange = (event) => {
    const {t} =  props;
       const { name, value } = event.target;
      const errorsCopy = { ...errors};
       errorsCopy[name] = undefined;
      if(name === 'password' || name === 'passwordRepeat'){
       if(name === 'password' && value !== form.passwordRepeat){
          errorsCopy.passwordRepeat = t('password mismatch');
        }else if(name === 'passwordRepeat' && value !== form.password){
          errorsCopy.passwordRepeat = t('password mismatch');
        }else {
          errorsCopy.passwordRepeat = undefined;
        }
      }
      setErrors(errorsCopy);
      const formCopy = { ...form};
      formCopy[name] = value;
      setForm(formCopy);

  }
  const onClickSignup = () => {

  }

    const {t} = props;
    const{password: passwordError, passwordRepeat: passwordRepeatError} = errors;
    const buttonEnabled = form.username && form.password;
    return(
      <div className="container">
        <form>
          <h1 className="text-center">{t('Login Page')}</h1>
            <Input name="username" label={t('Username')} onChange={onChange}/>
            <Input name="display" label={t('Display Name')} onChange={onChange}/>
            <Input name="password" label={t('Password')} error={passwordError} onChange={onChange} type="password"/>
            <Input name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeatError} onChange={onChange} type="password"/>

            <div className="text-center">
            <button className ="btn btn-primary"
              disabled={!buttonEnabled}
              onClick={onClickSignup}>
                {t('Login')}
            </button>
            </div>
        </form>
      </div>
    );
  }
const LoginPageWithTranslation = withTranslation()(LoginPage);

export default connect()(LoginPageWithTranslation);
