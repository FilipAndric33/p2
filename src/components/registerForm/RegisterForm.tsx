import React from 'react';
import { useRegisterForm } from '../../hooks/useRegisterForm';

const RegisterForm: React.FC = () => {
  const { formValues, handleChange, handleSubmit } = useRegisterForm();

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={
        'flex flex-col justify-between fixed h-[60vh] w-[20vw] items-center top-1/4 overflow-hidden shadow-form-white rounded-lg px-2 py-4'
      }
    >
      <img
        src={'background-comb.png'}
        className={'absolute -z-1 -translate-y-1/10 scale-200'}
        alt={'form image'}
      />
      <img
        src={'background-comb.png'}
        className={'absolute -z-1 translate-y-126/100 scale-200'}
        alt={'form image'}
      />
      <div className={'logo flex'}>
        <img src={'honey-logo.png'} alt={'logo'} />
      </div>
      <label htmlFor="username">Username</label>
      <input
        type={'text'}
        name={'username'}
        value={formValues.username}
        onChange={(e) => handleChange(e)}
        required={true}
        className={'form-input text-xs'}
      />
      <label htmlFor="email">Email</label>
      <input
        type={'email'}
        name={'email'}
        value={formValues.email}
        onChange={(e) => handleChange(e)}
        required={true}
        className={'form-input text-xs'}
      />
      <label htmlFor="password">Password</label>
      <input
        type={'password'}
        name={'password'}
        value={formValues.password}
        onChange={(e) => handleChange(e)}
        required={true}
        className={'form-input text-xs'}
      />
      <button
        name={'submit'}
        type={'submit'}
        className={
          'btn primary-btn my-4 px-2 font-bold rounded-sm auth-form-button'
        }
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
