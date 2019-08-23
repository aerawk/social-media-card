import styled from 'styled-components'

const Icon = styled.img`
cursor: pointer;
  padding: 1rem;
  transform :scale(.95);
  transition: all .25s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

export { Icon as default }