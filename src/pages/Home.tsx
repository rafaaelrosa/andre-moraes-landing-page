import type React from 'react'
import vegetaProfile from '../assets/Vegeta-profile.jpg'

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">Advocacia Trabalhista e de Família</p>
            <h1 className="home-hero__title">
              Proteger seus direitos é a sua prioridade, estar ao seu lado é o meu compromisso.
            </h1>
            <p className="home-hero__subtitle">
              Atuação estratégica para orientar decisões importantes no trabalho e na família, com
              linguagem acessível e foco em reduzir riscos, conflitos e incertezas.
            </p>
            <div className="home-hero__actions">
              <a
                href="https://docs.google.com/forms/d/SEU_FORMULARIO_AQUI/viewform"
                target="_blank"
                rel="noreferrer"
                className="button button--primary"
              >
                Agendar uma conversa
              </a>
              <a
                href="#areas"
                className="button button--ghost"
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Conhecer serviços
              </a>
            </div>
          </div>

          <div className="home-hero__stats">
            <div className="home-hero__stat">
              <span className="home-hero__stat-number">50+</span>
              <span className="home-hero__stat-label">casos acompanhados</span>
            </div>
            <div className="home-hero__stat">
              <span className="home-hero__stat-number">10+</span>
              <span className="home-hero__stat-label">anos de dedicação ao Direito</span>
            </div>
            <div className="home-hero__stat">
              <span className="home-hero__stat-number">100%</span>
              <span className="home-hero__stat-label">foco em orientação clara</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <h2>Como posso te ajudar</h2>
          <p>
            Atuação estratégica em Direito do Trabalho e Direito de Família para trazer
            segurança, previsibilidade e tranquilidade em decisões importantes.
          </p>
        </div>

        <div className="home-grid">
          <article className="home-card">
            <h3>Direito Trabalhista</h3>
            <p>
              Apoio em conflitos trabalhistas e na prevenção de novos riscos, com análise técnica
              e explicações claras sobre cada passo do processo.
            </p>
            <ul>
              <li>Revisão de verbas rescisórias e acordos</li>
              <li>Horas extras, adicionais e equiparação salarial</li>
              <li>Assédio moral e sexual no ambiente de trabalho</li>
              <li>Planejamento para acordos e audiências</li>
            </ul>
          </article>

          <article className="home-card">
            <h3>Direito de Família</h3>
            <p>
              Atuação sensível e técnica em temas que envolvem relações familiares, priorizando
              segurança jurídica e acolhimento.
            </p>
            <ul>
              <li>Divórcio consensual e litigioso</li>
              <li>Guarda, convivência e pensão alimentícia</li>
              <li>Partilha de bens e planejamento patrimonial</li>
              <li>Inventário e regularização de heranças</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="home-section home-about">
        <div className="home-about__inner">
          <div className="home-about__image">
            <img 
              src={vegetaProfile} 
              alt="André Moraes - Advogado" 
              className="home-about__photo"
            />
          </div>
          <div className="home-about__content">
            <h2>Sobre André Moraes</h2>
            <p>
              Advogado com atuação focada em Direito do Trabalho e Direito de Família, dedicado a
              oferecer orientação clara e acompanhamento próximo em momentos decisivos da vida
              profissional e pessoal.
            </p>
            <p>
              A atuação é guiada pela combinação entre análise técnica cuidadosa, escuta atenta e
              construção de estratégias que façam sentido para a realidade de cada pessoa ou família.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-social">
        <div className="home-social__content">
          <h2>Acompanhe conteúdos jurídicos</h2>
          <p>
            Em breve, este espaço poderá trazer conteúdos sobre direitos trabalhistas e de família
            em linguagem simples, para ajudar você a tomar decisões mais informadas no dia a dia.
          </p>
          <a
            href="https://docs.google.com/forms/d/SEU_FORMULARIO_AQUI/viewform"
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            Falar sobre um caso agora
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
