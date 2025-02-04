import React from "react";
import HomeLogo from "../../assets/burguerhome.svg"
import {CategoryCarousel, OffersCarousel} from "../../components";

import {
  Container,
  HomeImg,
} from './styles'

export function Home(){

  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo-home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
