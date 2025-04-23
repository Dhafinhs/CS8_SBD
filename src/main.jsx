import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({
  duration: 2000,
  once: true, // animasi hanya jalan sekali saat scroll masuk
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
