import React from "react";
import { useHistory } from "react-router-dom"
import Person from "../../assets/user.svg"
import Cart from "../../assets/carrinho.svg"
import { useUser } from '../../hooks/UserContext'

import { 
  Container, 
  ContainerLeft, 
  ContainerRight, 
  PageLink, 
  PageLinkExit, 
  ContainerText,
  Line
} from './styles'

export function Header(){
  const { logout, userData} = useUser()
  const {
    push, 
    location: { pathname}
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft >
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
        <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>Produtos</PageLink>
      </ContainerLeft>
      
      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')} >
          <img src={Cart} alt="carrinho" />
        </PageLink>
          <Line></Line>
        <PageLink>
          <img src={Person} alt="pessoa" />
        </PageLink>
      </ContainerRight>
      
      <ContainerText>
        <p> Ola, {userData.name}</p>
        <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
      </ContainerText>
      
    </Container>
  )
}
