import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImage from '../../assets/logo.svg';

import { Container, Content } from './styles';

import Input from '../../components/FormInput';
import Button from '../../components/FormButton';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        email: Yup.string()
          .required('Email is required.')
          .email('Invalid Email.'),
        password: Yup.string().min(6, 'Minimum 6 characteres.'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImage} alt="Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <Input icon={FiUser} name="name" type="text" placeholder="Name" />
          <Input icon={FiMail} name="email" type="text" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button name="submit" type="submit">
            Register
          </Button>
          <a href="forgot">Forgot Password</a>
        </Form>

        <a href="signup">
          <FiArrowLeft />
          Back
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;