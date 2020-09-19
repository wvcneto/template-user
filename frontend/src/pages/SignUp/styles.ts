import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #80728b;
  border-radius: 12px;
  width: 100%;
  height: 95%;
  margin: auto;
  max-width: 600px;

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
    color: #fcfcfa;
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
      color: ${shade(0.2, '#fcfcfa')};
    }
  }
`;
