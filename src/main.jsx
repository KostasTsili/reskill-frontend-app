import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
 
=======
  <StrictMode>
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
  <BrowserRouter>
  <Routes>
      <Route path='/*' element={ <App />}/>
  </Routes>
    </BrowserRouter>
<<<<<<< HEAD
  //    <StrictMode>
  // </StrictMode>,
=======
  </StrictMode>,
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
)
