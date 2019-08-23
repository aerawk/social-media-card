import React from 'react';
import styled from 'styled-components'

const CardImage = () => {
    return (
      <Image>
        <img src="https://source.unsplash.com/random/300x190" alt="random-pic" />
      </Image>
    )
  }
  
  const Image = styled.div`
    background: #fff;
    height: 190px;
    transition: opacity .25s ease-in-out;
    &:hover {
      opacity: .9;
    }
  `

  export { CardImage as default }