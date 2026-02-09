import type React from 'react'

const Contact: React.FC = () => {
  return (
    <main className="contact">
      <header className="contact-header">
        <h1>Entre em contato</h1>
        <p>
          Conte seu caso com tranquilidade e receba uma avaliação jurídica clara, com orientação
          sobre os próximos passos mais adequados para a sua situação.
        </p>
      </header>

      <section className="contact-options">
        <div className="contact-card">
          <h2>Atendimento rápido</h2>
          <p>Para casos urgentes ou dúvidas pontuais, você pode falar diretamente pelo WhatsApp.</p>
          <a
            href="https://wa.me/55115997154251"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h2>E-mail</h2>
          <p>Se preferir, envie um resumo do seu caso por e-mail.</p>
          <a href="mailto:contato@andremoraes.adv.br" className="button button--ghost">
            Enviar e-mail
          </a>
        </div>

        <div className="contact-card">
          <h2>Formulário online</h2>
          <p>Preencha nosso formulário detalhado para que possamos entender melhor seu caso.</p>
          <a
            href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--ghost"
          >
            Preencher formulário
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contact
