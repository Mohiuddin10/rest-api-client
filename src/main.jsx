import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Home from './components/home/Home';
import Users from './components/users/Users'
// import router from "./assets/routes/Router"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/users",
    element: <Users></Users>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
