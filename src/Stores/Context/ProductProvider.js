import React, { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { getProducts } from '../../Adapter/api';
import ProductServices from '../../Services/Service';
import ProductReducer from '../Reducer/ProductReducer';


const ProductContext = createContext();

const initialState = {
  products: []
}

const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { products } = state;
  const [data,setData] = useState([])

  const service = new ProductServices();

  // methods

  useEffect(()=>{
    const fetchApi = async () => {
      setData(await getProducts()
      .catch(err => console.log(err) ))
    }
    fetchApi();
  },[])

  const GetProducts = async () => {
    const list = await service.getAllProducts();
    dispatch({type:"setProducts",payload:list});
  }

  return (
    <ProductContext.Provider value={  data } >
      {children}
    </ProductContext.Provider>
  )
}



export { ProductProvider, ProductContext };
