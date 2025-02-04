import React from 'react';
import { useLoginForm } from '../../hooks/useLoginForm';
import './style/index.scss';

const LoginForm: React.FC = () => {
  const { formValues, handleChange, handleSubmit } = useLoginForm();

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={'flex column space-between auth-form'}
    >
      <img
        src={'background-comb.png'}
        className={'form-image'}
        alt={'form image'}
      />
      <img
        src={'background-comb.png'}
        className={'form-image'}
        alt={'form image'}
      />
      <div className={'form-logo-container flex'}>
        <img src={'honey-logo.png'} alt={'logo'} />
      </div>
      <label htmlFor="email">Email:</label>
      <input
        type={'email'}
        name={'email'}
        value={formValues.email}
        onChange={(e) => handleChange(e)}
        required={true}
      />
      <label htmlFor="password">Password:</label>
      <input
        type={'password'}
        name={'password'}
        value={formValues.password}
        onChange={(e) => handleChange(e)}
        required={true}
      />
      <button name={'submit'} type={'submit'} className={'auth-form-button'}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
