import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RegisterForm } from '../../components/registerForm/RegisterForm';
import { LoginForm } from '../../components/loginForm/LoginForm';

const AuthPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/register') {
      setIsRegister(true);
    } else {
      setIsRegister(false);
      return;
    }
  }, [location.pathname]);
  return isRegister ? <RegisterForm /> : <LoginForm />;
};

export default AuthPage;
