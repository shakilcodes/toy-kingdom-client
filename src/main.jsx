import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/UserInformation/Login/Login.jsx';
import SignUp from './Component/UserInformation/SignUp/SignUp.jsx';
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import MyToy from './Component/MyToy/MyToy.jsx';
import AddAToys from './Component/AddAToys/AddAToys.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';
import AllToys from './Component/AllToys/AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'myToys',
        element: <MyToy></MyToy>
      },
      {
        path: 'addAToys',
        element: <AddAToys></AddAToys>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
