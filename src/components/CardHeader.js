import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const CardHeader = (props, defaultProps) => {
  return (
    <Header>
      <div>
        <Icon src={props.avatar} alt="user icon" width="45px" />
      </div>
      <div>
        <p className="bold">{props.name}</p>
        <p>{props.time}</p>
      </div>
    </Header>
  );
};

const Header = styled.div`
  align-items: center;
  display: flex;
  font-size: 1rem;
  height: 5rem;
  justify-content: flex-start;
  margin: 0;
  text-align: left;
`;

export { CardHeader as default };
