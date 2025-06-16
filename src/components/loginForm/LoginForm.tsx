import React from 'react';
import { useLoginForm } from '../../hooks/useLoginForm';

const LoginForm: React.FC = () => {
  const { formValues, handleChange, handleSubmit } = useLoginForm();

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
        className={'form-input text-xs'}
      />
      <label htmlFor="password">Password:</label>
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

export default LoginForm;
