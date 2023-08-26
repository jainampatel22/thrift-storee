import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const CartItemsContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  quantity: () => {}
})

export function CartProvider({ children }, ) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
  };
 
  const quantityHandler = (itemId, action) => {
    if(action === 'INC'){
        setCartItems(cartItems.map((item) => {
            if(item.id  === itemId){
                item.itemQuantity += 1
            }
            return item
        }))
    }
    else {
        setCartItems(cartItems.map((item) => {
            if(item.id  === itemId){
                item.itemQuantity -= 1
            }
            return item
        }))
    }
}
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,quantityHandler }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}