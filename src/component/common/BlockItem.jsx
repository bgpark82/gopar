import React from 'react';
import styled from 'styled-components';

const BlockItemBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  padding: 0.3rem;
  .label {
    font-weight: 600;
    margin-right: 1rem;
  }
  .element-group {
    display: flex;
    flex-wrap: wrap;
    .element {
      margin-right: 0.5rem;
    }
  }
`;

const BlockItem = ({ ...props }) => {
  const { children, label, col } = { ...props };
  const flex = `0 0 ${(parseInt(col) / 12) * 100 + '%'}`;
  return (
    <BlockItemBlock style={{ flex: `${flex}` }}>
      <div className="label">{label}</div>
      <div className="element-group">
        {Array.isArray(children)
          ? children.map((element, index) => (
              <div className="element" key={index}>
                {element}
              </div>
            ))
          : children}
      </div>
    </BlockItemBlock>
  );
};

export default BlockItem;
