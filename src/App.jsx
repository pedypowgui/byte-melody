// App.jsx
import { useState } from 'react'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import ActiveSoundPanel from './components/ActiveSoundPanel/ActiveSoundPanel';

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      {/* <ActiveSoundPanel
        currentSound={currentSound}
        isPlaying={isPlaying}
        volume={volume}
        timeLeft={timeLeft}
      /> */}
      {currentPage === 'home' && (
        <Home onNavigate={setCurrentPage} />
      )}
      {currentPage === 'about' && (
        <About onNavigate={setCurrentPage} />
      )}
    </>
  )
}

export default App

