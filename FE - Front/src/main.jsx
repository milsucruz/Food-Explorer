import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import  GlobalStyles from './styles/global' 

import {Details} from './Pages/Details'
import {SignIn} from './Pages/SignIn'
import {SignUp} from './Pages/SignUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
)
