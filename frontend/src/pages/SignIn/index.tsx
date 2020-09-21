import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/AuthContext';

import logoImage from '../../assets/logo.svg';

import { Container, Content } from './styles';

import Input from '../../components/FormInput';
import Button from '../../components/FormButton';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();

  // eslint-disable-next-line no-console
  console.log(user);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required.')
            .email('Invalid Email.'),
          password: Yup.string().required('Password is required.'),
        });

        await schema.validate(data, { abortEarly: false });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImage} alt="Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>User Login</h1>
          <Input icon={FiMail} name="email" type="text" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button name="submit" type="submit">
            Login
          </Button>
          <a href="forgot">Forgot Password</a>
        </Form>

        <a href="signup">
          <FiLogIn />
          New Account
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
