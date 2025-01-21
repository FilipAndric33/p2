import React, { useState } from 'react';

export const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
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
      <button name={'submit'} type={'submit'}>
        Submit
      </button>
    </form>
  );
};
