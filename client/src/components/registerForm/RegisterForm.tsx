import React from 'react';
import { useRegisterForm } from '../../hooks/useRegisterForm';

const RegisterForm: React.FC = () => {
  const { formValues, handleChange, handleSubmit } = useRegisterForm();

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
      <label htmlFor="username">Username</label>
      <input
        type={'text'}
        name={'username'}
        value={formValues.username}
        onChange={(e) => handleChange(e)}
        required={true}
      />
      <label htmlFor="email">Email</label>
      <input
        type={'email'}
        name={'email'}
        value={formValues.email}
        onChange={(e) => handleChange(e)}
        required={true}
      />
      <label htmlFor="password">Password</label>
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

export default RegisterForm;
