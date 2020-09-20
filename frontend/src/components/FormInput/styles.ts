import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 12px;
  padding: 16px;
  width: 100%;

  border: 2px solid #394149;
  color: #4c4c4e;

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      color: #4c4ca4;
      border-color: #4c4ca4;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #4c4ca4;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fcfcfa;

    &::placeholder {
      color: #4c4c4e;
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 8px;
  }

  /* Change Autocomplete styles */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border: 0;
    -webkit-text-fill-color: #fcfcfa;
    transition: background-color 3000s ease-in-out 0s;
  }
`;
