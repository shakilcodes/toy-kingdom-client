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
import DetailsPage from './Component/DetailsSingle/DetailsPage.jsx';
import UpdateToy from './Component/UpdateToy/UpdateToy.jsx';
import PrivetRoute from './Component/ProvetRoute/PrivetRoute.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivetRoute><MyToy></MyToy></PrivetRoute>
      },
      {
        path: 'addAToys',
        element: <PrivetRoute><AddAToys></AddAToys></PrivetRoute>
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
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toy-kingdom-server.vercel.app/allToys')
      },
      {
        path: "/details/:id",
        element: <PrivetRoute><DetailsPage></DetailsPage></PrivetRoute>,
        loader: ({ params }) => fetch(`https://toy-kingdom-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://toy-kingdom-server.vercel.app/allToys/${params.id}`)
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
