import React from 'react';
import { useState } from 'react';
import { loginUser } from '../../utils/loginUser';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await loginUser({ email, password });
    console.log(result);
    navigate('/');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="email">Email</label>
      <input
        type={'email'}
        name={'email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <label htmlFor="password">Password</label>
      <input
        type={'password'}
        name={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <button name={'submit'} type={'submit'}>
        Submit
      </button>
    </form>
  );
};
