import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../Stores/Context/ProductProvider';



const ProductDetails = () => {

  const params = useParams();
  const { id } = params;

  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div className='
    flex justify-between items-center mt-[150px] mx-[150px] mb-[50px]
    p-[20px] border-2 border-solid border-silver rounded-lg
    '>
      {/* Details {id} */}
      <img src={image} alt='product' className='w-[450px]' />
      <div className='
      text-left p-[20px] ml-[30px] border-2 border-solid border-silver rounded-lg' >

        <h3 className='mt-[20px] mb-[30px] text-blueDark font-bold'>{title}</h3>

        <p className='mb-[30px] text-green-800' >{description}</p>

        <p className='mb-[50px] font-bold text-green-800' >
        <span className='text-orange-700 text-base' >Category: </span> {category}
        </p>

        <div className='flex justify-between items-center' >
          <span className='price' >{price} $</span>
          <Link className='backBtn' to={'/products'} >Back To Shop</Link>
        </div>

      </div>
    </div>
  )
}



export default ProductDetails;
