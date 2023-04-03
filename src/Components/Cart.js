import React, { useContext } from 'react';
import { shorten } from "../Utils/functions";
import { BsFillTrash3Fill } from "react-icons/bs";
import { CartContext } from '../Stores/Context/CartContextProvider';


const Cart = ({ data }) => {

  const { image, title, price, quantity } = data;

  const { Decrease, RemoveItem, Increase } = useContext(CartContext)

  return (
    <div className='
    flex justify-between items-center bg-white p-[15px]
    border-2 border-solid border-silver mb-[20px] rounded-md
    '>

      <img src={image} alt='product image' className='w-[80px]' />

      <div>
        <h3 className='mb-10 text-blueDark text-xl'>{shorten(title)}</h3>
        <p className='text-green-700 font-bold'>{price} $</p>
      </div>

      <div className='w-[25px] h-[25px] bg-orange-600 rounded-[3px] text-white
      font-bold text-center
      '>
        <span>{quantity}</span>
      </div>

      <div className='cartBtn flex items-center'>
        {
          quantity > 1
            ?
            <button onClick={() => Decrease(data)} >
              -
            </button>
            :
            <button onClick={() => RemoveItem(data)} >
              <BsFillTrash3Fill className='w-[20px] mx-auto'/>
            </button>
        }

          <button onClick={() => Increase(data)} className='flex justify-center ' >
            +
          </button>      
      </div>

    </div>
  )
}


export default Cart;