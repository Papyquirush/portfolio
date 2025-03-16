#!/bin/bash

# Répertoire de déploiement
TARGET_DIR="$HOME/www"

# Supprime le contenu du répertoire de déploiement
rm -rf $TARGET_DIR/*

# Copie uniquement le dossier /dist dans le répertoire de déploiement
cp -r $HOME/dist/* $TARGET_DIR/

echo "Déploiement réussi !"