import React from "react";
import HomeLogo from "../../assets/burguerhome.svg"


import {
  Container,
  HomeImg,
} from './styles'
import CategoryCarousel from "../../components/CategoryCarousel";

function Home(){

  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo-home" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home