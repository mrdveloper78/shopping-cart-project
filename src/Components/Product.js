import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Stores/Context/CartContextProvider';
import { shorten, isInCart, quantityCount } from '../Utils/functions';
import { BsFillTrash3Fill } from "react-icons/bs";




const Product = ({ productData }) => {

    // destracture data
    const { title, price, image, id } = productData;

    // use context
    const { state, RemoveItem, Decrease, Increase, AddNewItem } = useContext(CartContext);



    return (
        <div className='w-[250px] 
        border border-solid border-silver rounded-xl overflow-hidden
        bg-white mx-[10px] mb-[50px] text-center transition-all transition-200 ease
        cart-shadow 
        ' >

            <img
                src={image} alt='image'
                className='w-[230px] h-[200px] m-[10px]' />

            <h3 className='text-cartPrice text-left mt-[25px] mx-[20px] mb-[15px]
            text-[18px] font-bold
            ' >
                {shorten(title)}
            </h3>

            <p className='text-cartPrice text-left mx-[20px] my-[15px] text-base font-medium'>
                {price}
            </p>

            <div className='flex justify-between items-center mt-[35px] mx-[20px] mb-[20px]'>
                <Link
                    to={`/products/${id}`}
                    className='text-productLink text-base'
                >
                    Details
                </Link>

                <div className='buttonContainer flex items-center'>

                    {
                        quantityCount(state, id) === 1
                        &&
                        <button className='smallButton' onClick={() => RemoveItem(productData)}>
                            <BsFillTrash3Fill className='w-[20px]  mx-auto '/>
                        </button>
                    }

                    {
                        quantityCount(state, id) > 1
                        &&
                        <button className='smallButton' onClick={() => Decrease(productData)}>
                            -
                        </button>
                    }

                    {
                        isInCart(state, id)
                            ?
                            <button className='smallButton' onClick={() => Increase(productData)}>
                                +
                            </button>
                            :
                            <button onClick={() => AddNewItem(productData)}>
                                Add to cart
                            </button>
                    }

                </div>
            </div>

        </div>
    )
}


export default Product;