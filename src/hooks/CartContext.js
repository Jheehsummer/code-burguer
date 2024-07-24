import React, { createContext, useContext, useState, useEffect} from "react";
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem(
      'codeburguer: cartInfo', 
      JSON.stringify(products))
  } 

  const putProductsInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProduct = []
    if(cartIndex >= 0){
      newCartProduct = cartProducts

      newCartProduct[cartIndex].quantity = 
      newCartProduct[cartIndex].quantity + 1

      setCartProducts(newCartProduct)
    } else {
      product.quantity = 1
      newCartProduct = [...cartProducts, product]
      setCartProducts(newCartProduct)
    }

    await updateLocalStorage(newCartProduct)
  }

  const deleteProducts = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)
  
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = cartProducts.map( product => {
      return product.id === productId ? {...product, quantity : product.quantity + 1}
      : product 
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
    
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)
    
    if(cartProducts[cartIndex].quantity > 1) {

    const newCart = cartProducts.map( product => {
      return product.id === productId ? {...product, quantity : product.quantity - 1}
      : product 
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  
  } else {
    deleteProducts(productId)
  }
}

  useEffect(() => {
    const loadUserData = async () => {
      const clientCardData = await localStorage.getItem('codeburguer: cartInfo')
      
      if(clientCardData) {
        setCartProducts(JSON.parse(clientCardData))
      }

    }
    loadUserData()
    
  }, [])

return (
  <CartContext.Provider 
  value={{
    putProductsInCart, 
    cartProducts, 
    increaseProducts, 
    decreaseProducts, 
    deleteProducts}}
  >
    {children}
  </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  n: PropTypes.node
}