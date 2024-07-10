import React from "react";
import HomeLogo from "../../assets/burguerhome.svg"


import {
  Container,
  HomeImg,
} from './styles'
import CategoryCarousel from "../../components/CategoryCarousel";
import OffersCarousel from "../../components/OffersCarousel";

function Home(){

  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo-home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home