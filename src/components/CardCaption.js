import React from "react";
import styled from "styled-components";

const CardCaption = props => {
  return (
    <Caption>
      <p>{props.caption}</p>
    </Caption>
  );
};

const Caption = styled.div`
  align-items: center;
  border-bottom: 1px solid #333;
  display: flex;
  font-size: 0.9rem;
  height: 8rem;
  justify-content: flex-start;
  margin: 0;
  padding: 0 1rem;
  text-align: left;
`;

export { CardCaption as default };
