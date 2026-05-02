// Sobre — página de informações do Byte Melody
// Esta página apresenta informações sobre o aplicativo Byte Melody

import AppHeader from '../../components/AppHeader/AppHeader'
import './About.css'

function About({ onNavigate }) {
  return (
    <div className="about">
      <AppHeader 
        title="Gui melody"
        subtitle="Sobre o repositório"
        onNavigate={onNavigate}
        currentPage="about"
      />
      
      <div className="about__container">
        <section className="about__section">
          <h1 className="about__title">Sobre o Gui Melody</h1>
          
          <p className="about__text">
            O Gui Melody é um repositório de músicas feitas por Guilherme Brito, 
            desenvolvido para centralizar criações próprias ou execuções. 
            Mas se quiser, você pode usar para se concentrar, estudar, trabalhar ou descansar.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__subtitle">Características</h2>
          
          <ul className="about__features">
            <li className="about__feature-item">
              <strong>Instrumental:</strong> Explore uma variedade de estilos musicais tocados em um único instrumento, o piano
            </li>
            <li className="about__feature-item">
              <strong>Estilos:</strong> Sons organizados por estilos para fácil acesso
            </li>
            <li className="about__feature-item">
              <strong>Controle de Volume:</strong> Ajuste o volume de acordo com sua preferência
            </li>
            <li className="about__feature-item">
              <strong>Timer (Cronômetro):</strong> Defina um tempo limite para seus sons, caso queira usá-lo para estudos
            </li>
            <li className="about__feature-item">
              <strong>Interface Intuitiva:</strong> Design limpo e fácil de usar
            </li>
          </ul>
        </section>

        <section className="about__section">
          <h2 className="about__subtitle">Como Usar</h2>
          
          <ol className="about__steps">
            <li className="about__step-item">
              Selecione um estilo musical ou visualize todos os sons disponíveis
            </li>
            <li className="about__step-item">
              Clique em qualquer som para reproduzi-lo
            </li>
            <li className="about__step-item">
              Ajuste o volume com o controle deslizante
            </li>
            <li className="about__step-item">
              Opcionalmente, defina um timer para pausar automaticamente após um tempo
            </li>
            <li className="about__step-item">
              Relaxe e aproveite
            </li>
          </ol>
        </section>

        <section className="about__section">
          <h2 className="about__subtitle">Tecnologias</h2>
          
          <p className="about__text">
            Gui Melody foi desenvolvido com:
          </p>
          
          <ul className="about__tech-list">
            <li>React 19</li>
            <li>Vite</li>
            <li>HTML5 Audio API</li>
            <li>CSS3</li>
          </ul>
        </section>

        <section className="about__section about__section--last">
          <h2 className="about__subtitle">Contato e Suporte</h2>
          
          <p className="about__text">
            Tem dúvidas ou sugestões? Adoraríamos ouvir sua opinião para melhorar 
            continuamente o Gui Melody, para tal, entre em contato através do e-mail: <i>guidobritosantosss@gmail.com</i>
          </p>
          
          <p className="about__text">
            Versão: 1.0.0
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
