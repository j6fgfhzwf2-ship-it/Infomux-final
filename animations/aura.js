export function drawAura(ctx) {
    ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(400, 300, 100, 0, Math.PI * 2);
    ctx.fill();
}

