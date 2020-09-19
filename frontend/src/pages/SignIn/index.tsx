import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImage} alt="Logo" />
      <form>
        <h1>User Login</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
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
