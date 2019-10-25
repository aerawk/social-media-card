import React from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardCaption from "./CardCaption";
import CardFooter from "./CardFooter";

const Card = props => {
  return (
    <CardBody>
      <CardHeader name={props.name} time={props.time} avatar={props.avatar} />
      <CardImage postImage={props.postImage} />
      <CardCaption caption={props.caption} />
      <CardFooter />
    </CardBody>
  );
};

Card.defaultProps = {
  name: "Anna Nymous",
  time: "12:00 AM",
  postImage: "https://source.unsplash.com/random/300x190",
  avatar:
    "https://cdn.iconscout.com/icon/premium/png-512-thumb/anonymous-user-1-627706.png",
  caption:
    "Where do I even begin? Knowing what to say about a moment like this is tougher than I expected. Hopefully this picture is worth a thousand words, because I have none."
};

const CardBody = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  max-height: 100%;
  width: 300px;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.4);
`;

export { Card as default };
