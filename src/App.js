import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Products from './Components/Products';
import Home from './Components/Home';
import Error from './Components/Error';
import SharedLayout from './Components/SharedLayout'
import SingleProduct from './Components/SingleProduct';

function App() {

  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='products' element={<Products />}/>
            <Route path='products/:productID' element={<SingleProduct />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Error />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
