import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// COMPONENTS
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';

// LOADER

import { getPastriesLoader, getPicturesLoader } from './loaders';

const router = createBrowserRouter([
 
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/home",
        element: <Home/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/menu",
        element: <Menu/>,
        loader: getPastriesLoader
      },
      {
        path:"/gallery",
        element: <Gallery/>,
        loader: getPicturesLoader
      }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>
);

