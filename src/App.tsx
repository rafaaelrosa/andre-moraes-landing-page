import Home from './pages/Home'
import PracticeAreas from './pages/PracticeAreas'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const scrollToId = (id: string) => {
    try {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } catch (error) {
      console.error('Scroll error:', error)
    }
  }

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    scrollToId(id)
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
              onClick={(event) => handleNavClick(event, 'inicio')}
            >
              Início
            </a>
            <a
              href="#areas"
              className="app-header__link"
              onClick={(event) => handleNavClick(event, 'areas')}
            >
              Áreas de atuação
            </a>
            <a
              href="#contato"
              className="app-header__link"
              onClick={(event) => handleNavClick(event, 'contato')}
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
