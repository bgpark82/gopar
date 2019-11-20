import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  color: var(--gray-7);
  background: var(--white);
  font-size: 1rem;
  font-weight: 600;
  border: var(--border);
  border-radius: 4px;
  padding: 0.24rem 1rem;
  cursor: pointer;
  outline: none;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      padding: 0.5rem;
      font-size: 1.125rem;
    `}
  ${props =>
    props.cyan &&
    css`
      background: var(--cyan-5);
      color: var(--white);
      border: none;
      &:hover {
        background: var(--cyan-4);
      }
    `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
