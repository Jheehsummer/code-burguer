import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: 70%;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  padding: 10px;
  border-bottom: 2px solid #9758A6;
  text-align: center;

  p {
    font-size: 16px;
    color: #9758A6;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  width: max-content;
  grid-gap: 10px 15px;
  padding: 10px;
  align-items: center;
  text-align: start;
  

  p {
    font-size: 16px;
    color: #000000;
    font-weight: bold;
  } 

  button {
    height: 20px;
    width: 20px;
    background-color: #9758A6;
    border: none;
    color: #ffffff;
    cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
}

  .quantity-container{
    display: flex;
    gap: 10px;
  }

`
export const NameProducts = styled.p`
  font-size: 16px;
  color: #000000;
  font-weight: bold;  
  word-wrap: break-word;
  width: 150px;

`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
export const Image = styled.img`
  border-radius: 10px;
  width: 120px;
`
export const ImageTrash = styled.img`
  
`