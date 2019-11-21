import React from 'react';
import styled from 'styled-components';

const SelectBlock = styled.select`
  border: var(--border);
  border-radius: 4px;
  padding: 0 0.25rem 0.5rem 0.25rem;
  outline: none;
  background: var(--white);
  height: 1.8rem;

  &:focus {
    border: var(--border-focus);
  }
`;

const Select = ({ ...props }) => {
  const { options } = { ...props };
  return (
    <SelectBlock>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </SelectBlock>
  );
};

export default Select;
