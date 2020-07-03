import React from 'react';

const Input = (props) => {
  const {label, name, onChange, type, error } = props;
  return(
    <div className="form-group">
        <label>{label}</label>
        <input className={error ? 'form-control is-invalid' : 'form-control'}
        onChange={onChange} name={name} type={type}></input>
        <div className="invalid-feedback">{error}</div>
    </div>
  );
}

export default Input;
