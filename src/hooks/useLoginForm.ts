import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../stores/userStore';
import { loginUserService } from '../services/loginUser.service';

interface formValueInterface {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<formValueInterface>({
    email: '',
    password: '',
  });
  const { assignUser } = userStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await loginUserService({
        email: formValues.email,
        password: formValues.password,
      });
      if (!user) {
        return;
      }
      assignUser({ user: user });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return { formValues, handleChange, handleSubmit };
};
