import React, { createContext, useReducer } from 'react';
import ProductServices from '../../Services/Service';
import cartReducer from '../Reducer/cartReducer';

export const CartContext = createContext();

const initialState = {
  allProducts : [],
  selectedItems: [],          //لیست مواردی که کاربر انتخاب کرده است
  itemsConter: 0,          //تعداد کل محصولاتی است که کاربر انتخاب کرده است
  total: 0,               //مجموعه هزینه کاربر
  checkOut: false         //تسویه حساب

}




const CartContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const servise = new ProductServices();

  // methods

  const getAll = async () => {
    const list  = await servise.getAllProducts();
    dispatch({type:"getAll",payload:list});
  }

  const RemoveItem = (productData) => {
    dispatch({ type: "RemoveItem", payload: productData });
  }

  const Decrease = (productData) => {
    dispatch({ type: "Decrease", payload: productData })
  }

  const Increase = (productData) => {
    dispatch({ type: "Increase", payload: productData })
  }

  const AddNewItem = (productData) => {
    dispatch({ type: "AddNewItem", payload: productData })
  }

  const Checkout = () => {
    dispatch({type:"Checkout"})
  }

  const Clear = () => {
    dispatch({type:"Clear"})
  }

  return (
    <CartContext.Provider value={{ 
      state,getAll, AddNewItem, Increase, Decrease, RemoveItem, Checkout, Clear 
      }} >
      {children}
    </CartContext.Provider>
  )
}



export default CartContextProvider;
