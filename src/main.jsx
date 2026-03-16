import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Feed from './Components/Dynamic/Feed/Feed'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Home />


  </StrictMode>,
)
