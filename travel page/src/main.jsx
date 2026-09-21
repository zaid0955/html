import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/style.css";
//import img from './img/showcase-photo3.jpg'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
