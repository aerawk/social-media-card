import React from 'react';
import styled from 'styled-components'
import Icon from './Icon'

const CardHeader = () => {
    return (
      <Header>
        <div>
          <Icon src='https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png' alt="user icon" width="45px" />
        </div>
        <div>
          <p className="bold">Rusty Shackleford</p>
          <p>at 1:37 PM</p>
        </div>
      </Header>
    )
  }
  
  const Header = styled.div`
      align-items: center;
      display: flex;
      font-size: 1rem;
      height: 5rem;
      justify-content: flex-start;
      margin: 0;
      text-align: left;
  `



  export { CardHeader as default }