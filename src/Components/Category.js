import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Stores/Context/CartContextProvider';
import Product from './Product';


const Category = () => {

  const params = useParams();
  const { cat } = params;

  const { state } = useContext(CartContext);
  const { allProducts } = state;

  const list = allProducts.filter(item => item.category === cat)

  return (
    <div className='mt-[100px]' >

      <p className='text-center mb-7 text-xl font-bold text-blueDark' >category {cat}</p>

      <div className='flex flex-wrap gap-x-10 items-center mx-[150px] ' >
        {
          list && list.map(
            (item, index) => {
              return (
                <Product key={index} productData={item} />
              )
            }
          )
        }
      </div>
    </div>
  )
}


export default Category;