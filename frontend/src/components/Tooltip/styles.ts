import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #4c4ca4;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #fcfcfa;

    &::before {
      content: '';
      border-style: solid;
      border-color: #4c4ca4 transparent;
      border-width: 6px 6px 0px 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
