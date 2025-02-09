import LoginForm from '../../components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <div
      className={
        'flex bg-black w-full h-[150vh] justify-center items-center relative'
      }
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
