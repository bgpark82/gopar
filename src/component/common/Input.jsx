import React from 'react';
import styled from 'styled-components';

const InputBlock = styled.input`
  border: var(--border);
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  outline: none;
  /* width: 100%; */

  line-height: 1.5;
  font-size: 0.8rem;

  &:focus {
    border: var(--border-focus);
  }
`;

const Input = props => <InputBlock {...props} />;

export default Input;
