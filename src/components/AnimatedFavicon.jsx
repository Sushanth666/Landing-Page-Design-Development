import { useEffect } from 'react';

/**
 * AnimatedFavicon
 * Dynamically renders the official AetherFlow project logo on an offscreen canvas
 * and animates an orbiting electron beacon and pulsing network core in the browser tab.
 */
export const AnimatedFavicon = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    let angle = 0;
    let pulse = 0;
    let animId;
    let lastTime = 0;
    const frameInterval = 1000 / 18; // ~18 FPS is buttery smooth yet ultra-lightweight

    const renderFavicon = (time) => {
      animId = requestAnimationFrame(renderFavicon);

      if (time - lastTime < frameInterval) return;
      lastTime = time;

      if (document.hidden) return; // Save resources when tab is in background

      ctx.clearRect(0, 0, 32, 32);

      angle += 0.08;
      pulse += 0.1;
      const pulseFactor = (Math.sin(pulse) + 1) / 2; // 0 to 1

      // 1. Draw Rounded Dark Squircle Base
      const r = 7;
      const x = 3;
      const y = 3;
      const w = 26;
      const h = 26;

      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();

      ctx.fillStyle = '#05090f';
      ctx.fill();

      // Emerald border
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = '#10b981';
      ctx.stroke();

      // 2. Draw Network Lines
      ctx.beginPath();
      // Top (16, 9) to Hub (16, 17)
      ctx.moveTo(16, 9);
      ctx.lineTo(16, 17);
      // Hub (16, 17) to Bottom-Left (10, 23)
      ctx.lineTo(10, 23);
      // Hub (16, 17) to Bottom-Right (22, 23)
      ctx.moveTo(16, 17);
      ctx.lineTo(22, 23);
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.75)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // 3. Draw Nodes
      // Top Node
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(16, 9, 2, 0, Math.PI * 2);
      ctx.fill();

      // Bottom Left Node
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(10, 23, 2, 0, Math.PI * 2);
      ctx.fill();

      // Bottom Right Node
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(22, 23, 2, 0, Math.PI * 2);
      ctx.fill();

      // Central Hub with pulsing aura
      const hubRadius = 2.4 + pulseFactor * 0.8;
      ctx.fillStyle = '#6ee7b7';
      ctx.beginPath();
      ctx.arc(16, 17, hubRadius, 0, Math.PI * 2);
      ctx.fill();

      // Center white core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(16, 17, 1.2, 0, Math.PI * 2);
      ctx.fill();

      // 4. Moving Orbiting Electron Beacon around perimeter
      const orbitR = 12.5;
      const beaconX = 16 + Math.cos(angle) * orbitR;
      const beaconY = 16 + Math.sin(angle) * orbitR;

      // Glow tail
      ctx.fillStyle = 'rgba(110, 231, 183, 0.4)';
      ctx.beginPath();
      ctx.arc(beaconX, beaconY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Core beacon
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(beaconX, beaconY, 1.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(beaconX, beaconY, 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Update browser favicon
      link.href = canvas.toDataURL('image/png');
    };

    animId = requestAnimationFrame(renderFavicon);

    return () => {
      cancelAnimationFrame(animId);
      // Revert to static favicon on unmount
      if (link) link.href = '/favicon.svg';
    };
  }, []);

  return null;
};
