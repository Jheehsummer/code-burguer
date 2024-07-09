import styled from "styled-components";
import Hamburguer from '../../assets/hamburguer.svg'
import { Link as ReactLink } from "react-router-dom"


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

`

export const ContainerItens = styled.div`
  background: url('${Hamburguer}');
  height: 100%;
  width: 100%;
  max-width: 50%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center; 
  
`

export const ContainerLogin = styled.div`
  background: #373737;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;


  h1 {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #f1f1f1;
    margin-top: 50px;
    color: #9758A6;
    text-shadow: 3px 3px 10px #000000;
    
  }

  form {
    display: flex;
    flex-direction: column;
  }

`

export const Label = styled.p`
  margin-top: 20px;
  margin-bottom: 5px;
  color: #f1f1f1;
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;

`

export const Input = styled.input`
  width: 350px;
  height: 50px;
  gap: 10px;
  border-radius: 7px;
  box-shadow: 3px 3px 10px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
  
`

export const SignInLink = styled.p`
  color: #f1f1f1;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  margin-bottom: 20px;
`

export const Link = styled(ReactLink)`   
    
  cursor: pointer;
    color: #9758A6;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
  
`
export const ErrorMessage = styled.p`
  color: #cc1717;
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  margin-top: 5px;
`