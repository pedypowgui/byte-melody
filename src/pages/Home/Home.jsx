// Home — página principal do Byte Melody
// Esta página é responsável por:
//   1. Gerenciar os estados (categoria ativa, tempo selecionado, tempo restante, toast)
//   2. Compor todos os componentes juntos
//
// Observe como esta página não lida com detalhes de áudio —
// isso fica encapsulado no hook useAudioPlayer.

import { useState } from 'react'

import AppHeader       from '../../components/AppHeader/AppHeader'
import CategoryTabs    from '../../components/CategoryTabs/CategoryTabs'
import SoundCard       from '../../components/SoundCard/SoundCard'
import VolumeSlider    from '../../components/VolumeSlider/VolumeSlider'
import TimerSelector   from '../../components/TimerSelector/TimerSelector'
import FeedbackToast   from '../../components/FeedbackToast/FeedbackToast'

import { sounds, categories } from '../../data/sounds'

import './Home.css'

function Home({
  onNavigate,
  currentSound,
  isPlaying,
  volume,
  togglePlay,
  changeVolume,
  setTimeLeft,
}) {
  // Categoria selecionada nas abas (começa com "todos")
  const [activeCategory, setActiveCategory] = useState('todos')

  // Tempo selecionado em minutos (null = nenhum)
  const [selectedTime, setSelectedTime] = useState(null)

  // Estado do toast de feedback { show: bool, message: string }
  const [toast, setToast] = useState({ show: false, message: '' })

  // --- Lista de sons filtrada ---
  // Se "todos" estiver ativo, mostra todos; senão, filtra pela categoria
  const soundsFiltrados =
    activeCategory === 'todos'
      ? sounds
      : sounds.filter((s) => s.category === activeCategory)

  // --- Funções de ação ---

  // Exibe o toast por 3 segundos e depois o esconde
  function mostrarToast(mensagem) {
    setToast({ show: true, message: mensagem })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  function handleTogglePlay(sound) {
    const estaRodandoEstesom = currentSound?.id === sound.id && isPlaying
    togglePlay(sound)
    if (estaRodandoEstesom) {
      mostrarToast(`⏸ ${sound.name} pausado`)
    } else {
      mostrarToast(`▶ ${sound.name} iniciado`)
    }
  }

  function handleSelectTime(minutos) {
    setSelectedTime(minutos)
    setTimeLeft(minutos * 60) // converte para segundos
    mostrarToast(`⏱ Timer configurado para ${minutos} min`)
  }

  // --- Renderização ---
  return (
    <div className="home">
      {/* 1. Cabeçalho com props de conteúdo */}
      <AppHeader
        title="Byte Melody"
        subtitle="Experiências sonoras interativas"
        onNavigate={onNavigate}
        currentPage="home"
      />

      {/* 2. Abas de categorias */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* 3. Lista de sons usando .map() */}
      <section className="home__lista">
        {soundsFiltrados.map((sound) => (
          // Cada SoundCard recebe as informações do seu som específico
          <SoundCard
            key={sound.id}
            sound={sound}
            isPlaying={isPlaying && currentSound?.id === sound.id}
            onTogglePlay={handleTogglePlay}
          />
        ))}
      </section>

      {/* 4. Controles globais */}
      <div className="home__controles">
        <VolumeSlider volume={volume} onChange={changeVolume} />
        <TimerSelector selectedTime={selectedTime} onSelect={handleSelectTime} />
      </div>

      {/* 5. Painel de "tocando agora" — só aparece quando há um som selecionado */}

      {/* 6. Toast de feedback — aparece e some automaticamente */}
      <FeedbackToast show={toast.show} message={toast.message} />
    </div>
  )
}

export default Home
