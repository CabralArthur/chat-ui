import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './styles/app.css';
import { GlobalStyle } from './styles/global';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyle/>
    <ToastContainer/>
  </>
)
