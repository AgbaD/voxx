import React from 'react';
import './App.css';
import { createBrowserRouter } from "react-router-dom";

import { Home, About, Error } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  }
])

export default router