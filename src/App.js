import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Products from './Components/Products';
import Home from './Components/Home';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
    {/* <nav>NavBar</nav> */}
        <Routes>
            <Route path='/' element={<Home />}>
            <Route path='about' element={<About />}/>
            <Route path='products' element={<Products />}/>
            <Route path='*' element={<Error />}/>
            </Route>
        </Routes>
        {/* <footer>Footer</footer> */}
    </BrowserRouter>
  )
}

export default App;
