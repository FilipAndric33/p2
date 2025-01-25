import React, { useState } from 'react';
import { registerUser } from '../../utils/registerUser';
import { useNavigate } from 'react-router-dom';

export const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await registerUser({ username, email, password });
    console.log(result);
    if (result) {
      navigate('/login');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username</label>
      <input
        type={'text'}
        name={'username'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={true}
      />
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
      <button name={'submit'} type={'submit'} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
