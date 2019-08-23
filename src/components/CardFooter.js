import React from 'react';
import styled from 'styled-components'
import Icon from './Icon'

const CardFooter = () => {
  return (
    <Footer>
      <Icon src="https://cdn.iconscout.com/icon/premium/png-256-thumb/heart-1420-632443.png" alt="heart icon" width="30px" />
      <Icon src="https://cdn.iconscout.com/icon/premium/png-256-thumb/comment-1500492-1271137.png" alt="comment icon" width="30px" />
      <Icon src="https://cdn.iconscout.com/icon/free/png-256/share-1805992-1532890.png" alt="share icon" width="30px" />
      <Icon src="https://cdn.iconscout.com/icon/premium/png-256-thumb/tag-139-1164443.png" alt="tag icon" width="30px" />
    </Footer>
  )
}

const Footer = styled.div`
    align-items: center;
    display: flex;
    height: 4rem;
    justify-content: space-evenly;
    margin: 0;
`
export { CardFooter as default }