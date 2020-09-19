import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Container, Content } from './styles';

import Input from '../../components/FormInput';
import Button from '../../components/FormButton';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImage} alt="Logo" />
      <form>
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
      </form>

      <a href="signup">
        <FiLogIn />
        New Account
      </a>
    </Content>
  </Container>
);

export default SignIn;
