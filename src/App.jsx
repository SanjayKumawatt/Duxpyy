import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Agents from './Pages/Agents'
import UseCases from './Pages/UseCases,'
import Features from './Pages/Featurs'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import Sales from './Pages/Sales'
import Engineering from './Pages/Engineering'
import Recruiting from './Pages/Recruting'
import ProjectManagement from './Pages/ProjectManagement'
import Finance from './Pages/Finance'
import CustomerSupport from './Pages/CustomerSupport'
import Blogs from './Pages/Blogs'
import Auth from './Pages/Auth'
import Privacy from './Pages/Privacy'
import TermsOfService from './Pages/TermsOfServcies'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/agents",
          element:<Agents/>
        },
        {
          path:"/use-cases",
          element:<UseCases/>
        },
        {
          path:"/features",
          element:<Features/>
        },
        {
          path:"/pricing",
          element:<Pricing/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/solutions/sales",
          element:<Sales/>
        },
        {
          path:"/solutions/engineering",
          element:<Engineering/>
        },
        {
          path:"/solutions/recruiting",
          element:<Recruiting/>
        },
        {
          path:"/solutions/project-management",
          element:<ProjectManagement/>
        },
        {
          path:"/solutions/finance",
          element:<Finance/>
        },
        {
          path:"/solutions/customer-support",
          element:<CustomerSupport/>
        },
        {
          path:"/blogs",
          element:<Blogs/>
        },
        {
          path:"/login",
          element:<Auth/>
        },
        {
          path:"/privacy-policy",
          element:<Privacy/>
        },
        {
          path:"/terms-of-service",
          element:<TermsOfService/>
        },
        {
          path:"/request-demo",
          element:<Contact/>
        },
        {
          path:"/checkout/pro",
          element:<Contact/>
        },
        {
          path:"/signup",
          element:<Auth/>
        },
        {
          path:"/book-demo",
          element:<Contact/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App