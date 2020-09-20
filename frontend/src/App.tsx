import React from 'react';

import GlobalStyle from './styles/global';

// import { Container } from './styles';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
