import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 12px;
  border: 2px solid #394149;
  padding: 16px;
  width: 100%;

  display: flex;

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
    color: #4c4c4e;
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
