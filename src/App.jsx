import React from 'react';
import { useRoutes } from 'react-router-dom';
import Homepage from './Homepage';
import Menu from './Menu';
import Cart from './frontend/cart.jsx'; 

function App() {
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/menu', element: <Menu /> },
    { path: '/cart', element: <Cart/>}
  ]);

  return routes;
}

export default App;