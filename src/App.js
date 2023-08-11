import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Sighnin from './pages/Sighnin';
import Signup from './pages/Signup';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home /> ),
  },
  {
    path: "signin",
    element: (<Sighnin  /> ),
  },
  {
    path: "signup",
    element: (<Signup />),
  },
]);

function App() {
  return(
    <div className="App">
      <RouterProvider router={router} />
   
    
    </div>
  );
}

export default App;
