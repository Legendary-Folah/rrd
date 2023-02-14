import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Products from './Components/Products';
import Home from './Components/Home';
import Error from './Components/Error';
import SharedLayout from './Components/SharedLayout'
import SingleProduct from './Components/SingleProduct';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import SharedProductLayout from './Components/SharedProductLayout';

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>

            <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />}/>
            <Route path=':productID' element={<SingleProduct />} />
            </Route>
            
            <Route path='login' element={<Login setUser={setUser}/>} />
            <Route path='dashboard' element={
              <ProtectedRoute user={user}>
              <Dashboard user={user}/>
              </ProtectedRoute>
            }/>
            <Route path='*' element={<Error />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
