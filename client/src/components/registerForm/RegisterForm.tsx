import React, { useState } from 'react';
import { registerUser } from '../../utils/registerUser';

export const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = registerUser({ username, email, password });
    console.log(result);
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
