import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InitialD from './assets/initiald.png'
import './App.css'

function App() {
  const result = "The best choice"
  return (
    <>
      <div className="video-container">
        <div className="video">
          <img className="video-img" src = {InitialD} alt="Intitil D anime" />
          <p>Совсем недавно вышел новый сезон!</p>
          <div className="video-footer">
            <p>Лайки: 0</p>
            <button>Лайк</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
