import React from 'react';
import styled from 'styled-components';

const BlockItemBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.2rem;
  margin-right: 0.5rem;
  .label {
    font-weight: 600;
    margin-right: 1rem;
  }
  .element {
    margin-right: 0.5rem;
  }
`;

const BlockItem = ({ ...props }) => {
  const { children, label } = { ...props };
  return (
    <BlockItemBlock>
      <div className="label">{label}</div>
      {Array.isArray(children)
        ? children.map((element, index) => (
            <div className="element" key={index}>
              {element}
            </div>
          ))
        : children}
    </BlockItemBlock>
  );
};

export default BlockItem;
