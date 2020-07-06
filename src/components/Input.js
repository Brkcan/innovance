import React from 'react';

const Input = (props) => {
  const {label, name, onChange, type, error, placeholder,id } = props;
  return(
    <div className="form-row">
        <label>{label}</label>
        <input className={error ? 'form-control is-invalid' : 'form-control'}
        onChange={onChange} name={name} type={type}
        placeholder={placeholder} id={id} required></input>
        <div className="invalid-feedback">{error}</div>
    </div>
  );
}

export default Input;
