# Infomux

Infomux est un assistant IA avec animation style Apple Intelligence, prêt à utiliser sur Mac ou Windows.  
L’IA est hébergée en ligne, donc les utilisateurs n’ont rien à installer.

## Fonctionnalités

- Animation lumineuse type Apple Intelligence
- Texte central
- Connexion à une IA via un hébergement web
- Compatible Mac & Windows
- Gratuit et open-source

## Structure du projet

Infomux/
├── src/app.py # Script principal PyQt5
├── assets/ # Icônes et fichiers supplémentaires
├── web_ai/ # Interface web IA
│ ├── index.html
│ ├── script.js
│ └── style.css
├── requirements.txt
└── README.md

## Installation et lancement

1. Cloner le dépôt

```bash
git clone https://github.com/tonpseudo/Infomux.git
cd Infomux

## Créer un environnement Python et installer les dépendances
python3 -m venv env
source env/bin/activate   # Mac/Linux
env\Scripts\activate      # Windows
pip install -r requirements.txt

## Lancer l’application
python src/app.py
