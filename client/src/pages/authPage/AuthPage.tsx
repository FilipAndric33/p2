import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RegisterForm } from '../../components/registerForm/RegisterForm';
import { LoginForm } from '../../components/loginForm/LoginForm';
import './style/index.scss';

const AuthPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    if (location.pathname === '/register') {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [location.pathname]);
  return isRegister ? (
    <div className={'flex auth-page'}>
      <RegisterForm />
    </div>
  ) : (
    <div className={'flex auth-page'}>
      <LoginForm />
    </div>
  );
};

export default AuthPage;
