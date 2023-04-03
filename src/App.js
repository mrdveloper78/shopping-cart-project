import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Components/Category';
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import ShopCart from './Components/ShopCart';
import Store from './Components/Store';
import CartContextProvider from './Stores/Context/CartContextProvider';
import { ProductProvider } from './Stores/Context/ProductProvider';



function App() {

  return (
    <div className='container'>
      <ProductProvider>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/category/:cat' element={<Category/>} />
            <Route path='/products' element={<Store />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<ShopCart/>} />
            <Route path='/*' element={<Navigate to='/products' />} />
          </Routes>
        </CartContextProvider>
      </ProductProvider>
    </div>
  )
}

export default App;