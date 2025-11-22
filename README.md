# Infomux Final IA v2

Projet Electron avec IA et animations interactives.  
Cette version est entièrement fonctionnelle et sécurisée pour l’utilisation de l’API IA.

---

## 🌐 Site web
Lien : [à compléter](#)

---

## 👤 Contact Discord
- Dev : `milaslevrai`  
- Dark : `darkolevrai`

---

## 📂 Structure du projet

- `animations/` – dossier contenant des animations supplémentaires (optionnel)  
- `aura.js` – animation “aura”  
- `glow.js` – animation “glow”  
- `liquid-gradient.js` – animation “liquid gradient”  
- `electron-app/` – configuration ou build Electron (optionnel)  
- `renderer/` – fichiers côté rendu (optionnel)  
- `index.html` – page principale affichée par Electron  
- `script.js` – script principal côté rendu pour les animations et IA  
- `style.css` – styles  
- `main.js` – script principal d’Electron  
- `preload.js` – préchargement sécurisé  
- `package.json` – configuration et scripts  
- `.gitignore` – fichiers à ignorer  
- `.env` – contient la clé API (**à ne jamais pousser**)  
- `README.md` – documentation

---

## ⚡ Installation et lancement

1. **Cloner le dépôt :**

```bash
git clone https://github.com/TON_UTILISATEUR/Infomux-final-ia-infomux.git
cd Infomux-final-ia-infomux
Créer un fichier .env avec votre clé API :
API_KEY=ta_cle_api_ici
Installer les dépendances Node et Electron :
npm install
Lancer l’application :
npm start
