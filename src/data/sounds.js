// Lista de sons disponíveis no app
// Cada som tem: id, nome, categoria, emoji e caminho do arquivo de áudio
// Para usar áudios reais, coloque os arquivos .mp3 na pasta /public/sounds/

export const sounds = [
  { id: 1, name: 'Chuva suave',      category: 'natureza',     emoji: '🌧️', color: "red", src: '/sounds/rain.mp3'        },
  { id: 2, name: 'Ondas do mar',     category: 'natureza',     emoji: '🌊', color: "blue", src: '/sounds/ocean.mp3'       },
  { id: 3, name: 'Floresta',         category: 'natureza',     emoji: '🌿', color: "green", src: '/sounds/forest.mp3'      },
  { id: 4, name: 'Ruído branco',     category: 'ruído branco', emoji: '📡', color: "pink", src: '/sounds/white-noise.mp3' },
  { id: 5, name: 'Ventilador',       category: 'ruído branco', emoji: '🌀', color: "white", src: '/sounds/fan.mp3'         },
  { id: 6, name: 'Piano suave',      category: 'foco',         emoji: '🎹', color: "yellow", src: '/sounds/piano.mp3'       },
  { id: 7, name: 'Lo-fi beats',      category: 'foco',         emoji: '🎧', color: "brown", src: '/sounds/lofi.mp3'        },
  { id: 8, name: 'Cafeteria',        category: 'foco',         emoji: '☕', color: "aliceblue", src: '/sounds/cafe.mp3'        },
  { id: 9, name: 'Tigela tibetana',  category: 'meditação',    emoji: '🔔', color: "beige", src: '/sounds/bowl.mp3'        },
  { id: 10, name: 'Om mantra',       category: 'meditação',    emoji: '🕉️', color: "orange", src: '/sounds/om.mp3'         },
  { id: 11, name: 'Pássaros',        category: 'relaxante',    emoji: '🐦', color: "violet", src: '/sounds/birds.mp3'       },
  { id: 12, name: 'Lareira',         category: 'relaxante',    emoji: '🔥', color: "aliceblue", src: '/sounds/fireplace.mp3'   },
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
