import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImage from '../../assets/logo.svg';

import { Container, Content } from './styles';

import Input from '../../components/FormInput';
import Button from '../../components/FormButton';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logoImage} alt="Logo" />
        <Form onSubmit={handleSubmit}>
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
            Login
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
