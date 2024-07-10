import styled from "styled-components"
  
  export const ContainerButton = styled.button`
  width: 200px;
  height: 40px;
  gap: 10px;
  border-radius: 50px;
  border: none;
  background: #9758A6;
  color: #f1f1f1;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
