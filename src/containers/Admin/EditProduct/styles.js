import styled from "styled-components";
import { Button } from "../../../components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px
  
  }
`

export const Title = styled.h1`
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 20px;
    color: #9758A6;
    text-shadow: 3px 3px 10px #000000;

`
export const Label = styled.p`
    font-size: 14px;
    color: #efefef;
    margin-bottom: 3px;
    padding-left: 10px;
`
export const Input = styled.input`
    box-shadow: 0px 4px 14px 0px #0000001A;
    height: 40px;
    width: 100%;
    background-color: #efefef;
    border: none;
    border-radius: 10px;
    min-width: 280px;
    padding-left: 15px;
    font-size: 14px;
    color: #565656;
    font-weight: bold;
`

export const ButtonStyle = styled(Button)`
    width: 100%;
    margin-top: 25px;
`

export const LabelUpload = styled.label`
    color: #efefef;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #efefef;
    border-radius: 5px;
    padding: 10px;
    gap: 10px;  
   
    input {
      opacity: 0;
      width: 1px;
    }

`
export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  color: #efefef;

  input {
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`
