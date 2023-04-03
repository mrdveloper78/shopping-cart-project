import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Stores/Context/CartContextProvider';
import Cart from './Cart';


const ShopCart = () => {

  const { state, Checkout, Clear } = useContext(CartContext);

  return (
    <div className='
    flex justify-between items-start 
    mt-[150px] mx-[175px] mb-[50px] transition-all delay-200 ease-in'>
      
      <div className='w-[70%]'>
        {
          state.selectedItems && state.selectedItems.map(
            (item) => {
              return (
                <Cart key={item.id} data={item} />
              )
            }
          )
        }
      </div>

      {
        state.itemsConter > 0
        &&
        <div className='w-[27%] bg-white border border-solid border-silver rounded-md text-left'>
          <p className='text-paymentPargraf mt-[20px] mx-[20px] mb-[10px]'>
            <span className='text-blueDark font-bold'>Total Items: </span>{state.itemsConter}
          </p>

          <p className='text-paymentPargraf mt-[20px] mx-[20px] mb-[10px]'>
            <span className='text-blueDark font-bold'>Total Payment: </span>{state.total}
          </p>

          <div className='flex justify-between items-center mt-[50px] mx-[20px] mb-[10px]'>
            <button className='checkout' onClick={() => Checkout()} >Check Out</button>
            <button className='clear' onClick={() => Clear()} >Clear</button>
          </div>
        </div>
      }

      {
        state.checkOut 
        &&
        <div className='border-4 border-dotted border-blue-500 p-[60px]'>
          <h3 className='text-green-600 mt-[30px] mb-[50px] font-[18px]'>
          checkOut is successful
          </h3>
          <Link to='/products' className='checkComp'>buy more</Link>
        </div>
      }

      {
        !state.checkOut && state.itemsConter === 0
        &&
        <div className='border-4 border-double border-blue-500 p-[60px]'>
          <h3 className='text-green-600 mt-[30px] mb-[50px] font-[18px]'>Want to by</h3>
          <Link to='/products' className='checkComp' >Go To Shop</Link>
        </div>
      }
    </div>
  )
}



export default ShopCart;
