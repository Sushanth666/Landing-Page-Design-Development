import { useEffect, useRef } from 'react';

/**
 * AnimatedFavicon
 * Provides smooth, moving animation in the browser tab:
 * 1. Dynamic Moving Favicon:
 *    - Offscreen 32x32 canvas rendered at ~15fps
 *    - Pulsing emerald network core and expanding radar sonar waves
 *    - High-contrast orbiting satellite beacon with glowing comet tail
 *    - Active signal packets transmitting across node bridges
 *    - Cross-browser DOM replacement to bypass Chrome/Edge static SVG cache
 * 2. Moving Browser Tab Title (Marquee Ticker):
 *    - Smooth character-by-character scrolling ticker in document.title
 *    - Context-aware text that adapts when navigating to feature subpages or architecture
 *    - Dynamic background tab activity indicator when tab is unfocused
 */
export const AnimatedFavicon = ({ currentView = 'home', selectedFeatureId = 1 }) => {
  const frameRef = useRef(0);

  // 1. DYNAMIC MOVING FAVICON ANIMATION
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Remove any static SVG or duplicate favicon links from <head> to prevent cache conflicts
    const removeStaticIcons = () => {
      const existingIcons = document.querySelectorAll("link[rel*='icon']:not(#dynamic-animated-favicon)");
      existingIcons.forEach((el) => el.remove());
    };
    removeStaticIcons();

    let angle = 0;
    let pulse = 0;
    let animId;
    let lastTime = 0;
    const frameInterval = 1000 / 14; // ~14 FPS is optimal for browser tab renderers

    const renderFavicon = (time) => {
      animId = requestAnimationFrame(renderFavicon);

      if (time - lastTime < frameInterval) return;
      lastTime = time;

      if (document.hidden) return; // Pause when tab is not active to conserve CPU

      ctx.clearRect(0, 0, 32, 32);

      angle += 0.12;
      pulse += 0.08;
      const pulsePhase = (Math.sin(pulse) + 1) / 2; // 0 to 1

      // 1. Draw Rounded Dark Squircle Base with Emerald Border
      const r = 7;
      const x = 2.5;
      const y = 2.5;
      const w = 27;
      const h = 27;

      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();

      // Deep dark slate fill
      ctx.fillStyle = '#040810';
      ctx.fill();

      // Glowing Emerald outer border
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = '#10b981';
      ctx.stroke();

      // 2. Expanding Sonar Radar Wave from Center
      const radarRadius = 3.5 + (pulsePhase * 9);
      ctx.beginPath();
      ctx.arc(16, 16, radarRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(52, 211, 153, ${Math.max(0, 0.7 - pulsePhase * 0.6)})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // 3. Network Circuit Link Lines
      ctx.beginPath();
      // Top (16, 8.5) -> Hub (16, 16)
      ctx.moveTo(16, 8.5);
      ctx.lineTo(16, 16);
      // Hub (16, 16) -> Bottom-Left (9.5, 22.5)
      ctx.lineTo(9.5, 22.5);
      // Hub (16, 16) -> Bottom-Right (22.5, 22.5)
      ctx.moveTo(16, 16);
      ctx.lineTo(22.5, 22.5);
      // Bottom cross connector
      ctx.moveTo(9.5, 22.5);
      ctx.lineTo(22.5, 22.5);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.75)';
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // 4. Moving Signal Packets along Circuit Lines
      const packetPos1 = (Math.sin(angle * 1.5) + 1) / 2;
      const py1 = 8.5 + packetPos1 * (16 - 8.5);
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(16, py1, 1.2, 0, Math.PI * 2);
      ctx.fill();

      // 5. Stationary Network Nodes
      // Top Node
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(16, 8.5, 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Bottom-Left Node
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(9.5, 22.5, 2.0, 0, Math.PI * 2);
      ctx.fill();

      // Bottom-Right Node
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(22.5, 22.5, 2.0, 0, Math.PI * 2);
      ctx.fill();

      // 6. Center Hub with Pulsing Light Core
      const hubRadius = 2.6 + pulsePhase * 1.0;
      ctx.fillStyle = '#6ee7b7';
      ctx.beginPath();
      ctx.arc(16, 16, hubRadius, 0, Math.PI * 2);
      ctx.fill();

      // Hot white center
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(16, 16, 1.4, 0, Math.PI * 2);
      ctx.fill();

      // 7. High-Contrast Moving Orbiting Satellite Beacon with Comet Tail
      const orbitR = 12.2;
      const beaconX = 16 + Math.cos(angle) * orbitR;
      const beaconY = 16 + Math.sin(angle) * orbitR;

      // Comet tail (3 trailing points)
      for (let t = 1; t <= 3; t++) {
        const tailAngle = angle - t * 0.22;
        const tailX = 16 + Math.cos(tailAngle) * orbitR;
        const tailY = 16 + Math.sin(tailAngle) * orbitR;
        ctx.fillStyle = `rgba(110, 231, 183, ${0.45 / t})`;
        ctx.beginPath();
        ctx.arc(tailX, tailY, Math.max(1, 2.4 - t * 0.5), 0, Math.PI * 2);
        ctx.fill();
      }

      // Outer satellite glow
      ctx.fillStyle = 'rgba(52, 211, 153, 0.7)';
      ctx.beginPath();
      ctx.arc(beaconX, beaconY, 3.4, 0, Math.PI * 2);
      ctx.fill();

      // Bright white satellite core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(beaconX, beaconY, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // 8. Update Favicon in document <head> using cache-invalidating replacement
      try {
        const dataUrl = canvas.toDataURL('image/png');
        const existing = document.getElementById('dynamic-animated-favicon');
        const newLink = document.createElement('link');
        newLink.id = 'dynamic-animated-favicon';
        newLink.rel = 'icon';
        newLink.type = 'image/png';
        newLink.href = dataUrl;

        if (existing && existing.parentNode) {
          existing.parentNode.replaceChild(newLink, existing);
        } else {
          document.head.appendChild(newLink);
        }
      } catch {
        // Fallback silently if canvas export is blocked
      }
    };

    animId = requestAnimationFrame(renderFavicon);

    return () => {
      cancelAnimationFrame(animId);
      const activeLink = document.getElementById('dynamic-animated-favicon');
      if (activeLink) activeLink.remove();
      // Restore default favicon
      const defaultLink = document.createElement('link');
      defaultLink.rel = 'icon';
      defaultLink.type = 'image/svg+xml';
      defaultLink.href = '/favicon.svg';
      document.head.appendChild(defaultLink);
    };
  }, []);

  // 2. MOVING BROWSER TAB TITLE (SCROLLING MARQUEE ANIMATION)
  useEffect(() => {
    let baseText = '⚡ AetherFlow — Autonomous Workflow Intelligence ✦ Real-Time Agent Mesh ✦ 98.2% Accuracy ✦ 1.5ms Latency ✦ ';

    if (currentView === 'feature-detail') {
      const featureTitles = {
        1: '🤖 AetherFlow: Autonomous AI Agents ✦ 98.2% Accuracy ✦ Self-Learning Mesh ✦ ',
        2: '📊 AetherFlow: Real-Time Data Streams ✦ 1.5ms Latency ✦ Live Telemetry ✦ ',
        3: '🔒 AetherFlow: Secure Orchestration Enclave ✦ Zero-Retention Encryption ✦ SOC2 Type II ✦ ',
        4: '🔌 AetherFlow: Cross-Platform Integrations ✦ 200+ Connectors ✦ Bi-Directional OAuth ✦ ',
        5: '🔀 AetherFlow: Dynamic Process Mapping ✦ Visual DAG Builder ✦ Self-Healing Logic ✦ ',
        6: '🌐 AetherFlow: Scalable Edge Infrastructure ✦ 32 Global Edge Regions ✦ ',
        7: '🛡️ AetherFlow: Self-Healing Canary Rollbacks ✦ 8s MTTR ✦ 0 Downtime ✦ ',
        8: '✨ AetherFlow: Natural Language Synthesizer ✦ Text-to-DAG AI ✦ 10x Velocity ✦ '
      };
      baseText = featureTitles[selectedFeatureId] || baseText;
    } else if (currentView === 'architecture') {
      baseText = '📐 AetherFlow: Architecture Specifications ✦ Enterprise Security Matrix ✦ Sub-ms Pipelines ✦ ';
    } else if (currentView === 'playground') {
      baseText = '⚡ AetherFlow Studio: Interactive DAG Canvas ✦ Live Sandbox Active ✦ ';
    }

    let offset = 0;
    const tickerInterval = setInterval(() => {
      if (document.hidden) {
        document.title = '🟢 AetherFlow Active — Multi-Agent Mesh Online';
        return;
      }
      offset = (offset + 1) % baseText.length;
      // Seamless scrolling marquee moving animation
      const movingTitle = baseText.slice(offset) + baseText.slice(0, offset);
      document.title = movingTitle;
    }, 180);

    return () => {
      clearInterval(tickerInterval);
      document.title = 'AetherFlow — Autonomous Workflow & Productivity Intelligence';
    };
  }, [currentView, selectedFeatureId]);

  return null;
};

