import React from 'react';
import styled from 'styled-components';

const TextAreaBlock = styled.textarea`
  border: var(--border);
  outline: none;
  border-radius: 4px;
  padding: 0.5rem;
  line-height: 1.5;

  &:focus {
    border: var(--border-focus);
  }
`;

const TextArea = () => {
  return <TextAreaBlock />;
};
export default TextArea;
