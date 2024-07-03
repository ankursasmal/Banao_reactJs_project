import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sign from './Sign.jsx';
import SignIn from './SignIn.jsx';
import Join from './Join.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    
     children:[
      {  path: "/",
      element:<Sign/>}
      ,{
      path: "/join",
    element:<Join/>
   }]
  

   }
  
   
    
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
