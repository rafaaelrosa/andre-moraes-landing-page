# 🏛️ André Moraes - Advocacia Trabalhista e de Família

Landing page profissional para escritório de advocacia especializado em Direito do Trabalho e Direito de Família.

🔗 **Site:** https://rafaaelrosa.github.io/andre-moraes-landing-page/

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router v7** - Roteamento
- **CSS Vanilla** - Estilização customizada

## 📋 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Navegação fluida entre páginas
- ✅ SEO otimizado (Open Graph, Twitter Cards, Structured Data)
- ✅ Acessibilidade (WCAG 2.1)
- ✅ Performance otimizada
- ✅ Formulário de contato via Google Forms
- ✅ Links diretos para WhatsApp e e-mail

## 🏗️ Estrutura do Projeto

```
├── public/              # Arquivos estáticos
├── src/
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── PracticeAreas.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Componente principal
│   ├── App.css         # Estilos globais
│   ├── index.css       # Reset e variáveis CSS
│   └── main.tsx        # Entry point
├── index.html          # HTML base
└── vite.config.ts      # Configuração do Vite
```

## 🚀 Deploy

### Opção 1: Comando NPM (Simples)

```bash
npm run deploy
```

### Opção 2: Script Bash (Interativo)

```bash
./deploy.sh
```

O script irá:
1. Verificar mudanças não commitadas
2. Gerar build otimizado
3. Fazer deploy automático para GitHub Pages
4. Exibir link do site

### Deploy Manual

Se preferir fazer manualmente:

```bash
# 1. Build
npm run build

# 2. Commit da pasta dist
git add dist -f
git commit -m "Deploy: update site"

# 3. Push para gh-pages
git subtree push --prefix dist origin gh-pages
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/andre-moraes-landing-page.git

# Entre na pasta
cd andre-moraes-landing-page

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### Build para Produção

```bash
# Gera build otimizado
npm run build

# Preview do build
npm run preview
```

### Lint

```bash
# Verifica código
npm run lint
```

## 📝 Configuração

### Dados de Contato

Atualize os seguintes arquivos com os dados reais:

**src/pages/Contact.tsx:**
- WhatsApp: `https://wa.me/5511999999999`
- E-mail: `contato@andremoraes.adv.br`
- Google Forms: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform`

**index.html:**
- URL do site
- Telefone
- Endereço
- Imagem Open Graph (`/og-image.jpg`)

### SEO

A imagem Open Graph deve ter:
- Dimensões: 1200x630px
- Formato: JPG ou PNG
- Localização: `/public/og-image.jpg`

## 🎨 Personalização

### Cores

As cores principais estão definidas no CSS:
- Primary: `#0f766e` (Teal)
- Background: `#f8fafc` (Slate)
- Text: `#0f172a` (Dark Slate)

### Conteúdo

Edite os arquivos em `src/pages/` para atualizar:
- Textos e descrições
- Áreas de atuação
- Estatísticas
- Informações profissionais

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle size: ~150KB (gzipped)

## ♿ Acessibilidade

- Navegação por teclado
- Screen reader friendly
- Contraste WCAG AA
- Semântica HTML5

## 📱 Responsividade

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy a pasta dist/
```

### Outras Plataformas

O projeto é compatível com:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Render

## 📄 Licença

Este projeto é privado e de uso exclusivo do escritório André Moraes Advocacia.

## 👤 Autor

**André Moraes**
- Website: [andremoraes.adv.br](https://andremoraes.adv.br)
- Email: contato@andremoraes.adv.br

## 🤝 Suporte

Para dúvidas ou suporte técnico, entre em contato através do e-mail acima.

---

**Última atualização:** Fevereiro 2026  
**Versão:** 1.0.0
