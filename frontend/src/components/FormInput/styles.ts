import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #34d4d8;
      border-color: #34d4d8;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #34d4d8;
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fcfcfa;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
