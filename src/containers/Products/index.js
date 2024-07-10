import { useEffect, useState } from "react";
import React from "react";
import ProductsLogo from "../../assets/bkgburguer.svg"
import api from '../../services/api'

import {
  Container,
  ProductsImg,
} from './styles'

function Products(){
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories(){
      const { data } = await api.get('categories')
      
      setCategories(data)
    }

    loadCategories()
  }, [])


  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logo-products" />
    { categories && categories.map(category => (
      <button key={category.id} >{category.name}</button>
    ))}
    </Container>
  )
}

export default Products