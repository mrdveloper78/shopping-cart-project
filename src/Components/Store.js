import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ProductServices from '../Services/Service';
// context
import { ProductContext } from '../Stores/Context/ProductProvider';
import Product from './Product';



const Store = () => {

  
  const { products, getProducts } = useContext(ProductContext);
  const [info, setInfo] = useState([])
  const service = new ProductServices()

  // get data from api
  useEffect(() => {
    const fetchApi = async () => {
      setInfo(await service.getAllProducts())
    }
    fetchApi();
  }, []);


  return (
    <div 
    className='
    flex flex-wrap justify-between items-center
    mt-[150px] px-[150px]' >
      {
       info && info.map(
          (item) => {
            return(
              <Product key={item.id} productData={item} />
            )
          }
        )
      }
    </div>
  )
}



export default Store;
