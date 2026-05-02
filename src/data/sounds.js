// Lista de sons disponíveis no app
// Cada som tem: id, nome, categoria, emoji e caminho do arquivo de áudio
// Para usar áudios reais, coloque os arquivos .mp3 na pasta /public/sounds/

export const sounds = [
  { id: 1, name: 'Chuva suave',      category: 'natureza',     emoji: '🌧️', bg: '/fundos/fogo.mp4',   src: '/sounds/rain.mp3'       },
  { id: 2, name: 'Ondas do mar',     category: 'natureza',     emoji: '🌊', bg: '/fundos/fogo.mp4',   src: '/sounds/teste.mp3'      }
]

// Categorias usadas nas abas de filtro
// "todos" é especial: mostra todos os sons sem filtro
export const categories = [
  'todos',
  'natureza',
  'relaxante',
  'foco',
  'meditação',
  'ruído branco',
]
