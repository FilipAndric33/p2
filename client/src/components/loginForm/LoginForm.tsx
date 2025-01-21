import React from 'react';
import { useState } from 'react';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
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
