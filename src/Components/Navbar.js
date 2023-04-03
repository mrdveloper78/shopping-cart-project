import React, { useContext } from 'react';
import { CartContext } from '../Stores/Context/CartContextProvider';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const { state } = useContext(CartContext);

  return (
    <div className='bg-white mb-[100px] fixed top-0 w-full navbar-shadow'>
      <div
        className='
      flex justify-between items-center 
      h-[40px] py-[40px] px-[180px]'>

        <Link
          to='/products'
          className='text-productLink font-bold 
          border-solid border-b-[3px] rounded-b-[2px] border-productLink
          hover:text-productLinkHover hover:border-productLinkHover' >
          Products
        </Link>

        <div className='relative'>
          <Link to='/cart' >
            <FaShoppingCart className='text-[35px] text-shopIcon' />
          </Link>
          <span 
          className='absolute top-0 right-0 bg-itemsConter rounded-[50%]
          w-[18px] h-[18px] leading-[18px] text-[12px] text-center
          font-bold text-white
          '>
            {state.itemsConter}
          </span>
        </div>

      </div>
    </div>
  )
}



export default Navbar;
