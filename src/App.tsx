import Home from './pages/Home'
import PracticeAreas from './pages/PracticeAreas'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-header__brand">
            <span className="app-header__name">André Moraes</span>
            <span className="app-header__role">Advocacia Trabalhista e de Família</span>
          </div>
          <nav className="app-header__nav" aria-label="Navegação principal">
            <a
              href="#inicio"
              className="app-header__link"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('inicio')
              }}
            >
              Início
            </a>
            <a
              href="#areas"
              className="app-header__link"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('areas')
              }}
            >
              Áreas de atuação
            </a>
            <a
              href="#contato"
              className="app-header__link"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('contato')
              }}
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <section id="inicio" className="app-section">
          <Home />
        </section>

        <section id="areas" className="app-section">
          <PracticeAreas />
        </section>

        <section id="contato" className="app-section">
          <Contact />
        </section>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} André Moraes - Advocacia Trabalhista e de Família</p>
      </footer>
    </div>
  )
}

export default App
