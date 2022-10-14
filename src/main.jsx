import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import GlobalStyle from './styles/global'
import { ToastContainer} from 'react-toastify';
import { UserProvider } from './Contexts/userContext'
import TechProvider from './Contexts/techContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <TechProvider>
      <UserProvider>
            <GlobalStyle />
                <App />
      </UserProvider>
        </TechProvider>
      <ToastContainer/>
    </BrowserRouter>
  </React.StrictMode>
)
