import { useEffect } from 'react';
import RegisterForm from '../../components/registerForm/RegisterForm';

const RegisterPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={'flex auth-page'}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
