// Hook personalizado para controle de áudio
// Um hook é uma função que começa com "use" e pode usar outros hooks do React
// Aqui centralizamos toda a lógica de áudio para que os componentes não precisem saber como o áudio funciona

import { useState, useRef, useEffect } from 'react'

export function useAudioPlayer() {
  // Estado que guarda o som que está selecionado/tocando
  const [currentSound, setCurrentSound] = useState(null)

  // Estado que indica se está reproduzindo ou pausado
  const [isPlaying, setIsPlaying] = useState(false)

  // Estado do volume global (0 = mudo, 1 = máximo)
  const [volume, setVolume] = useState(0.5)

  // useRef guarda o elemento de áudio sem causar re-render quando muda
  const audioRef = useRef(null)

  // Função para tocar um som específico
  function play(sound) {
    // Para o áudio anterior antes de iniciar um novo
    if (audioRef.current) {
      audioRef.current.pause()
    }

    // Cria um novo elemento de áudio HTML5
    const audio = new Audio(sound.src)
    audio.volume = volume
    audio.loop = true // repete o som em loop

    // .play() retorna uma Promise — o .catch evita erros se o arquivo não existir
    audio.play().catch(() => {
      console.warn(`Arquivo não encontrado: ${sound.src}`)
    })

    // Salva a referência para poder pausar depois
    audioRef.current = audio
    setCurrentSound(sound)
    setIsPlaying(true)
  }

  // Função para pausar o áudio atual
  function pause() {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setIsPlaying(false)
  }

  // Função para retomar o áudio pausado
  function resume() {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {})
    }
    setIsPlaying(true)
  }

  // Função principal: alterna play/pause ou troca de som
  function togglePlay(sound) {
    const isMesmoSom = currentSound?.id === sound.id

    if (isMesmoSom) {
      // Se for o mesmo som, apenas alterna play/pause
      isPlaying ? pause() : resume()
    } else {
      // Se for um som diferente, começa do zero
      play(sound)
    }
  }

  // Função para alterar o volume
  function changeVolume(novoVolume) {
    setVolume(novoVolume)
    // Atualiza o volume no elemento de áudio em tempo real
    if (audioRef.current) {
      audioRef.current.volume = novoVolume
    }
  }

  // Cleanup: para o áudio quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  // Retorna os estados e funções que os componentes precisam
  return { currentSound, isPlaying, volume, togglePlay, changeVolume }
}
