import { css } from '@emotion/core';
import styled from '@emotion/styled';

const defaultButtonStyles = css`
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  outline: none;
  border: 0;
  
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled('button')`
  ${defaultButtonStyles};
`;

export const OutlineButton = styled('button')`
  ${defaultButtonStyles};
  border: 1px solid #000;
  background-color: transparent;
`;
