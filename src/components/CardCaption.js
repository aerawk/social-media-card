import React from 'react';
import styled from 'styled-components'

const CardCaption = () => {
    return (
      <Caption>
        <p>Where do I even begin? Knowing what to say about a moment like this is tougher than I expected. Hopefully this picture is worth a thousand words, because I have none.</p>
      </Caption>
    )
  }
  
  const Caption = styled.div`
      align-items: center;
      border-bottom: 1px solid #333;
      display: flex;
      font-size: .9rem;
      height: 8rem;
      justify-content: flex-start;
      margin: 0;
      padding: 0 1rem;;
      text-align: left;
  `

  export { CardCaption as default }