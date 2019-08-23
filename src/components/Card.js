import React from 'react';
import styled from 'styled-components'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardCaption from './CardCaption'
import CardFooter from './CardFooter'

const Card = () => {
    return (
      <CardBody>
        <CardHeader />
        <CardImage />
        <CardCaption />
        <CardFooter />
      </CardBody>
    )
  }

  const CardBody = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  max-height: 100%;
  width: 300px;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
`

  export { Card as default}