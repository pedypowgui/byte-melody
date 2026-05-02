// ActiveSoundPanel — painel que mostra o que está acontecendo agora
// Recebe quatro props:
//   currentSound → objeto do som que está ativo
//   isPlaying    → booleano do estado de reprodução
//   volume       → número entre 0 e 1
//   timeLeft     → segundos restantes do timer (ou null)

import './ActiveSoundPanel.css'

// Função auxiliar que formata segundos em MM:SS
// Ex: 125 → "02:05"
function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60)
  const sec = segundos % 60
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

function ActiveSoundPanel({ currentSound, isPlaying, volume, timeLeft }) {
  return (
    <div className="active-panel"> 
      <div className="active-panel__conteudo">
        <span className="active-panel__emoji">{currentSound.emoji}</span>

        <div className="active-panel__info">
          <p className="active-panel__nome">{currentSound.name}</p>
          <p className="active-panel__status">
            {isPlaying ? '▶ Reproduzindo' : '⏸ Pausado'}
          </p>
        </div>

        <div className="active-panel__detalhes">
          <p>Volume: {Math.round(volume * 100)}%</p>
          {/* Só mostra o timer se um tempo foi selecionado */}
          {timeLeft !== null && (
            <p className="active-panel__timer">
              ⏱ {formatarTempo(timeLeft)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ActiveSoundPanel
