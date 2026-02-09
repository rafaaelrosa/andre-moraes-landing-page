#!/bin/bash

# Script de deploy para GitHub Pages
# Uso: ./deploy.sh ou npm run deploy

echo "🚀 Iniciando deploy..."

# Verifica se há mudanças não commitadas
if [[ -n $(git status -s) ]]; then
    echo "⚠️  Você tem mudanças não commitadas."
    read -p "Deseja commitar antes de fazer deploy? (s/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        git add .
        read -p "Mensagem do commit: " commit_msg
        git commit -m "$commit_msg"
        git push origin master
    fi
fi

# Build do projeto
echo "📦 Gerando build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro no build. Deploy cancelado."
    exit 1
fi

# Deploy para gh-pages
echo "🌐 Fazendo deploy para GitHub Pages..."
git add dist -f
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"
git subtree push --prefix dist origin gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Deploy realizado com sucesso!"
    echo "🔗 Site: https://rafaaelrosa.github.io/andre-moraes-landing-page/"
else
    echo "❌ Erro no deploy."
    exit 1
fi
