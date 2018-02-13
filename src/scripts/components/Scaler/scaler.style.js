import styled from 'styled-components'

const Button = styled.button`
  border-radius: 10px;
  background-color: rebeccapurple;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
  }
`

const Image = styled.img`
  transform: scale(${p => (p.smaller ? 1 : 1.1)});
  margin: 20px;
`

export { Button, Image }
