import React from "react";
import CartLogo from "../../assets/bkgcar.svg"
import { Container, CartImg, Wrapper} from './styles'
import { CartItems, CartResume } from "../../components";


export function Cart(){

  return (
    <Container>
      <CartImg src={CartLogo} alt="logo-carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
