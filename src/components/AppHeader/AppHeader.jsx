// AppHeader — cabeçalho do app
// Recebe props:
//   title    → nome principal do app
//   subtitle → descrição ou contexto da tela
//   onNavigate → função para mudar de página (opcional)
//   currentPage → página atual (opcional)

import './AppHeader.css'

function AppHeader({ title, subtitle, onNavigate, currentPage }) {
  return (
    <header className="app-header">
      <div className="app-header__top">
        <h1 className="app-header__title">{title}</h1>
        {onNavigate && (
          <nav className="app-header__nav">
            <button
            // Verifica se a página home está ativada, se estiver adiciona o efeito de selecionada nela
              className={`app-header__nav-btn ${currentPage === 'home' ? 'app-header__nav-btn--active' : ''}`}
              onClick={() => onNavigate('home')}
            >
              Início
            </button>
            <button
            // Verifica se a página about está ativada, se estiver adiciona o efeito de selecionada nela
              className={`app-header__nav-btn ${currentPage === 'about' ? 'app-header__nav-btn--active' : ''}`}
              onClick={() => onNavigate('about')}
            >
              Sobre
            </button>
          </nav>
        )}
      </div>
      {/* Escreev o subtítulo que foi enviado como um parâmetro */}
      <p className="app-header__subtitle">{subtitle}</p>
    </header>
  )
}

export default AppHeader
