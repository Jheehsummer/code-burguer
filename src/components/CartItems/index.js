import React from "react";
import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import Trash from '../../assets/trash.png'

import { 
  Container, 
  Header, 
  Body, 
  EmptyCart, 
  Image, 
  ImageTrash, 
  NameProducts
} from './styles'


export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts} = useCart()

  return (
    <Container>
      <Header>
      <p></p>
      <p>Itens</p>
      <p>Preço</p>
      <p style={{paddingRight: 30}}>Quantidade</p>
      <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
      cartProducts.map(product =>(
      
      <Body key={product.id} >
        <Image src={product.url}/>
        <NameProducts>{product.name}</NameProducts>
        <p>{formatCurrency(product.price)}</p>
       
        <div className="quantity-container">
          <button onClick={() => decreaseProducts(product.id)}>-</button>
          <p>{product.quantity}</p>
          <button onClick={ () => increaseProducts(product.id)}>+</button>
        </div>

        <p>{formatCurrency(product.quantity * product.price)}</p>
        <ImageTrash src={Trash} onClick={ () => deleteProducts(product.id)} />
        </Body>

      ))
    ) : (
      <EmptyCart>Carrinho vazio</EmptyCart>
    )}

      
    </Container>
  )
}
