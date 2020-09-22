import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 56px;
  background: #34d4d8;
  color: #fcfcfa;
  border-radius: 12px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#34d4d8')};
  }
`;
