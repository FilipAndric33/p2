import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUserService } from '../services/registerUser.service';

export interface formValuesInterface {
  username: string;
  email: string;
  password: string;
}

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<formValuesInterface>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await registerUserService({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      });
      if (result) {
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { formValues, handleChange, handleSubmit };
};
