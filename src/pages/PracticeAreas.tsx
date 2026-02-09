import type React from 'react'

const PracticeAreas: React.FC = () => {
  return (
    <div className="areas">
      <header className="areas-header">
        <h1>Áreas de Atuação</h1>
        <p>
          Atuação focada em Direito do Trabalho e Direito de Família, com atenção às particularidades
          de cada caso e linguagem acessível em todas as etapas.
        </p>
      </header>

      <section className="areas-section">
        <div className="areas-section__intro">
          <h2>Direito Trabalhista</h2>
          <p>
            Apoio tanto para trabalhadores quanto para empresas na prevenção e na solução de conflitos
            trabalhistas, sempre buscando caminhos seguros e estratégicos.
          </p>
        </div>

        <div className="areas-grid">
          <article className="areas-card">
            <h3>Para trabalhadores</h3>
            <ul>
              <li>Revisão de verbas rescisórias e cálculos trabalhistas</li>
              <li>Ações envolvendo horas extras, adicionais e comissões</li>
              <li>Casos de assédio moral ou sexual no ambiente de trabalho</li>
              <li>Reconhecimento de vínculo de emprego e registro em carteira</li>
            </ul>
          </article>

          <article className="areas-card">
            <h3>Para empresas</h3>
            <ul>
              <li>Prevenção de passivos trabalhistas e análise de riscos</li>
              <li>Estratégia em ações trabalhistas e audiências</li>
              <li>Apoio em rescisões, acordos e negociações</li>
              <li>Orientação sobre rotinas de RH e compliance trabalhista</li>
            </ul>
          </article>
        </div>

        <div className="areas-section__cta">
          <p>Precisando de orientação em uma questão trabalhista?</p>
          <a
            href="https://docs.google.com/forms/d/SEU_FORMULARIO_AQUI/viewform"
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            Falar sobre caso trabalhista
          </a>
        </div>
      </section>

      <section className="areas-section areas-section--family">
        <div className="areas-section__intro">
          <h2>Direito de Família</h2>
          <p>
            Atuação acolhedora e técnica em temas que envolvem relações familiares, sempre com foco na
            proteção de direitos e na redução de conflitos.
          </p>
        </div>

        <div className="areas-grid">
          <article className="areas-card">
            <h3>Relações familiares</h3>
            <ul>
              <li>Divórcio consensual e litigioso</li>
              <li>Definição de guarda, convivência e regulamentação de visitas</li>
              <li>Fixação, revisão e exoneração de pensão alimentícia</li>
              <li>Acordos extrajudiciais para organização das rotinas familiares</li>
            </ul>
          </article>

          <article className="areas-card">
            <h3>Patrimônio e sucessões</h3>
            <ul>
              <li>Planejamento e partilha de bens no divórcio</li>
              <li>Inventário judicial e extrajudicial</li>
              <li>Regularização de bens e direitos de herdeiros</li>
              <li>Apoio na elaboração de acordos e termos de partilha</li>
            </ul>
          </article>
        </div>

        <div className="areas-section__cta">
          <p>Vivendo um momento delicado na família e precisa de orientação?</p>
          <a
            href="https://docs.google.com/forms/d/SEU_FORMULARIO_AQUI/viewform"
            target="_blank"
            rel="noreferrer"
            className="button button--ghost"
          >
            Falar sobre caso de família
          </a>
        </div>
      </section>
    </div>
  )
}

export default PracticeAreas
