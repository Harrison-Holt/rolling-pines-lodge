import Homepage from './frontend/home.jsx'; 
import { Routes, Route } from 'react-router-dom';
import Menu from './frontend/menu.jsx';
import Cart from './frontend/cart.jsx'; 

function App() {

  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
