import { useEffect } from 'react';
import LoginForm from '../../components/loginForm/LoginForm';
import './style/index.scss';

const LoginPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={'flex auth-page'}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
