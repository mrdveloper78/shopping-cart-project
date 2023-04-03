import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Stores/Context/CartContextProvider';
import Category from './Category';


const MainPage = () => {

    const { state, getAll } = useContext(CartContext);

    useEffect(() => {
        getAll()
    }, []);

    return (
        <div className='mt-[100px] '>

            <h1 className='text-center text-2xl font-bold mb-5' >
                PRODUCT LIST
            </h1>

            <div className='flex justify-around' >
                <Link to="/products" className='categoryBtn' >All Products</Link>
                <Link to="/category/electronics" className='categoryBtn' >Electronics</Link>
                <Link to="/category/jewelery" className='categoryBtn' >Jewellery</Link>
                <Link to="/category/men's clothing" className='categoryBtn' >Men Clothing</Link>
                <Link to="/category/women's clothing" className='categoryBtn' >Women clothing</Link>
            </div>

        </div>
    )
}



export default MainPage;
