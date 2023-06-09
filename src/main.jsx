import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Login from './Account/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Account/Register.jsx';
import Logout from './Account/Logout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>
  },
  {
    path: "/login",
    element:<Login></Login>
  },
  {
    path: "/Register",
    element:<Register></Register>
  },
  {
    path: "/logout",
    element:<Logout></Logout>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
