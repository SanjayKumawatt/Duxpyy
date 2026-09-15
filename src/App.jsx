import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import IDPPage from './Pages/Idp'
import FormsManagement from './Pages/formManagement'
import XFAConversion from './Pages/XFS'
import LoanApplication from './Pages/Loan'
import AccountStatements from './Pages/Accountstatement'
import FraudAlerts from './Pages/Fraud'
import Flow from './Pages/Flow'
import Agent from './Pages/Agents'
import Inbound from './Pages/Inbound'
import Outbound from './Pages/OutBound'
import FormProduct from './Pages/Form'
import BetaAccess from './Pages/Betaaccess'
import Contact from './Pages/Contact'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
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
          path:"/about",
          element:<About/>
        },
        {
          path:"/solutions/idp",
          element:<IDPPage/>
        },
        {
          path:"/solutions/forms-management",
          element:<FormsManagement/>
        },
        {
          path:"/solutions/xfa-conversion",
          element:<XFAConversion/>
        },
        {
          path:"/use-case/loan-application",
          element:<LoanApplication/>
        },
        {
          path:"/use-case/account-statements",
          element:<AccountStatements/>
        },
        {
          path:"/use-case/fraud-alerts",
          element:<FraudAlerts/>
        },
        {
          path:"/products/flow",
          element:<Flow/>
        },
        {
          path:"/products/agent",
          element:<Agent/>
        },
        {
          path:"/products/inbound",
          element:<Inbound/>
        },
        {
          path:"/products/outbound",
          element:<Outbound/>
        },
        {
          path:"/products/form",
          element:<FormProduct/>
        },
        {
          path:"/beta-access",
          element:<BetaAccess/>
        },
        {
          path:"/early-access",
          element:<BetaAccess/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/privacy",
          element:<Privacy/>
        },
        {
          path:"/terms",
          element:<Terms/>
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