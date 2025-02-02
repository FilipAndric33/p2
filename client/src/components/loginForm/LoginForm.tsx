import React from 'react';
import { useState } from 'react';
import { loginUserService } from '../../services/loginUser.service';
import { useNavigate } from 'react-router-dom';
import './style/index.scss';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await loginUserService({ email, password });
    if (result) {
      const message = 'User logged in successfully! ';
      navigate('/', { state: message });
    }
  };

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <label htmlFor="password">Password:</label>
      <input
        type={'password'}
        name={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <button name={'submit'} type={'submit'} className={'auth-form-button'}>
        Submit
      </button>
    </form>
  );
};
