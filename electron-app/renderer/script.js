import { drawAura } from './aura.js';
import { drawGlow } from './glow.js';
import { drawLiquidGradient } from './liquid-gradient.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Dessiner toutes les animations
drawLiquidGradient(ctx);
drawAura(ctx);
drawGlow(ctx);

// Exemple d'utilisation de l'IA
async function testIA() {
    const apiKey = process.env.API_KEY;
    if (!apiKey) return console.error("API_KEY non définie");

    // Exemple de fonction IA
    console.log("Clé API pour IA prête à l’emploi :", apiKey);
}

testIA();

