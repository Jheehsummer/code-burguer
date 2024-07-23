import styled from "styled-components";
import { Link }  from 'react-router-dom'


export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758A6;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px #00000040;

  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758A6;
    background-color: #efefef;
    color: #9758A6;
}

.rec.rec-arrow:disabled {
  border: none;
  background-color: #bebebf;
  color: #efefef;
}
`

export const CategoryImg = styled.img`

`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`
export const Image = styled.img`
  width: 200px;
  border-radius: 10px;

`
  export const Button = styled(Link)`
    margin-top: 16px;
    width: 200px;
    height: 50px;
    gap: 10px;
    border-radius: 8px;
    border: none;
    background: #9758A6;
    color: #f1f1f1;
    box-shadow: 0px 4px 4px 0px #00000040;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
`
