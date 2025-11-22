export function drawLiquidGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(1, 'purple');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);
}
