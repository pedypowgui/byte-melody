// App.jsx
import { useState, useEffect } from 'react'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import ActiveSoundPanel from './components/ActiveSoundPanel/ActiveSoundPanel'

import { useAudioPlayer } from './hooks/useAudioPlayer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Delegamos toda a lógica de áudio para o hook personalizado
  const { currentSound, isPlaying, volume, togglePlay, changeVolume } = useAudioPlayer()

  // Tempo restante em segundos para o countdown
  const [timeLeft, setTimeLeft] = useState(null)

  // UseEffect para controlar o timer aqui, para não perder a contagem quando troca de tela
  useEffect(() => {
    if (!isPlaying || timeLeft === null || timeLeft <= 0) return

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [isPlaying, timeLeft])

  return (
    <>
      {currentPage === 'home' && (
        <Home
          onNavigate={setCurrentPage}
          currentSound={currentSound}
          isPlaying={isPlaying}
          volume={volume}
          togglePlay={togglePlay}
          changeVolume={changeVolume}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      )}
      {currentPage === 'about' && (
        <About onNavigate={setCurrentPage} />
      )}
      {currentSound && (
        <ActiveSoundPanel
          currentSound={currentSound}
          isPlaying={isPlaying}
          volume={volume}
          timeLeft={timeLeft}
        />
      )}
    </>
  )
}

export default App

