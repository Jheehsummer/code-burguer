import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  background: #ffffff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
   
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  padding-left: 100px;
  
  
`
export const ContainerRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: auto ;
  
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758A6 ': '#555555') };
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold ': 'normal') };

   &:hover {
    color: #9758A6;
  }

  &:active {
    opacity: 0.6;
  }
  
`
export const Line = styled.div`
  height: 40px;
  border-right: #bababa 1px solid;
  
`
export const ContainerText = styled.div`
  padding: 30px;
  
  p {
    color: #555555;
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    text-align: left;

  }
 
  
`

export const PageLinkExit = styled.a`
    color: #9758A6 ; 
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
  
`