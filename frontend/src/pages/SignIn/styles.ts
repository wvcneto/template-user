import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #80728b;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;

  margin: 40px 0;

  form {
    margin: 80px 0;
    width: 400px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      color: #fcfcfa;
      border-radius: 12px;
      border: 2px solid #394149;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #4c4c4e;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      height: 56px;
      background: #4c4ca4;
      color: #fcfcfa;
      border-radius: 12px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      font-weight: bold;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#4c4ca4')};
      }
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
    margin: 8px;
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
