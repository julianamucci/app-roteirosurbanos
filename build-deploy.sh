#!/bin/bash

# Executa o build do projeto
npm run build

# Caminho do diretório de build e do repositório de build
BUILD_DIR="dist/"
BUILD_REPO_DIR="../build-roteirosurbanos/"

# Copia os arquivos de build para o repositório de build
cp -R $BUILD_DIR* $BUILD_REPO_DIR

# Navega até o repositório de build
cd $BUILD_REPO_DIR

# Adiciona e faz o commit dos arquivos de build
git add .
git commit -m "Atualizando arquivos de build"
git push origin main
