import styled from "styled-components";

export const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  max-width: 400px;   

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
`

export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`

export const ProductName = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #000000;
  margin-top: 10px;
  word-wrap: break-word;
  width: 180px;

`

export const ProductPrice = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #000000;
  

`