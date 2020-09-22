import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  margin-b
`;

const apperFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  height: 95%;
  margin: auto;
  max-width: 600px;

  background: rgb(76, 76, 164);
  background: linear-gradient(
    0deg,
    rgba(76, 76, 164, 1) 0%,
    rgba(72, 216, 216, 1) 100%
  );

  /* Animation */
  animation: ${apperFromTop} 1.5s;

  img {
    height: 140px;
  }

  form {
    margin: 80px 0;
    width: 400px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #fcfcfa;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fcfcfa')};
      }
    }
  }

  > a {
    color: #34d4d8;
    display: block;
    margin-bottom: 8px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#34d4d8')};
    }
  }
`;
