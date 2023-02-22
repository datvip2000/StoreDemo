import {createContext,useState} from 'react'
import PRODUCTS from '../../Products/Product'

export const ShopContext = createContext()

const getCart = ()=>{
    let cart={}
    for ( let i=1 ; i< PRODUCTS.length +1 ;i++) {
        cart[i]=0
    }
    return cart
}


function ShopContextProvider({children}) {
  const [cartItem, setCartItem] = useState(getCart());



  const addCartItems = (idItem) => {
    setCartItem((prev) => ({ ...prev, [idItem]: prev[idItem] + 1 }));
  };

  const removeCartItems = (idItem) => {
    setCartItem((prev) => ({ ...prev, [idItem]: prev[idItem] - 1 }));
  };

  const updateCart =(change,idItem) => {
    setCartItem((prev) => ({ ...prev, [idItem]: change }));
  }


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  
  const getTotalCart = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        PRODUCTS.find((product) => product.id === Number(item));
        total += cartItem[item];
      }
    }
    return total;
  };

  const deleteCartItems = (idItem) => {
    setCartItem((prev) => ({ ...prev, [idItem]: prev[idItem] -  prev[idItem] }));
  };

  const contextValue = { cartItem, addCartItems, removeCartItems,updateCart,getTotalCartAmount,deleteCartItems,getTotalCart};


  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;

