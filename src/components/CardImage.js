import React from "react";
import styled from "styled-components";

const CardImage = props => {
  return (
    <Image>
      <img src={props.postImage} alt="random-pic" />
    </Image>
  );
};

const Image = styled.div`
  background: #fff;
  height: 190px;
  transition: opacity 0.25s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;

export { CardImage as default };
