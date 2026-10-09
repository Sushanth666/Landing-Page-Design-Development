import React, { useEffect, useRef } from 'react';

export const Canvas3D = ({ isGlobal = false, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D rotation & mouse tracking
    let targetRotX = 0.0006;
    let targetRotY = 0.0008;
    let rotX = 0;
    let rotY = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const x = e.clientX - width / 2;
      const y = e.clientY - height / 2;
      targetRotY = (x / width) * 0.007;
      targetRotX = -(y / height) * 0.007;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // 3D particle nodes distributed across space
    const particleCount = isGlobal ? 135 : 65;
    const particles = [];
    const boundX = width * 0.95;
    const boundY = height * 1.15;
    const boundZ = 750;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        baseX: (Math.random() - 0.5) * boundX * 2,
        baseY: (Math.random() - 0.5) * boundY * 2,
        baseZ: (Math.random() - 0.5) * boundZ * 2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.6 + 1.2,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Dynamic signal pulses moving between connected nodes
    const pulses = Array.from({ length: 18 }, () => ({
      source: Math.floor(Math.random() * particleCount),
      target: Math.floor(Math.random() * particleCount),
      progress: Math.random(),
      speed: 0.006 + Math.random() * 0.012,
    }));

    const maxConnectionDist = isGlobal ? 195 : 155;
    const fov = 490;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.016;
      rotX += (targetRotX - rotX) * 0.04 + 0.0003;
      rotY += (targetRotY - rotY) * 0.04 + 0.0005;
      scrollY += (targetScrollY - scrollY) * 0.07;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Parallax vertical drift based on page scroll
      const scrollDrift = (scrollY * 0.18) % (boundY * 2);

      // Project particles in 3D
      const projected = particles.map((p) => {
        // Natural gentle organic floating drift
        p.baseX += p.vx;
        p.baseY += p.vy;
        p.baseZ += p.vz;

        // Wrap around bounds for infinite seamless continuous field
        if (p.baseX > boundX) p.baseX = -boundX;
        if (p.baseX < -boundX) p.baseX = boundX;
        if (p.baseY > boundY) p.baseY = -boundY;
        if (p.baseY < -boundY) p.baseY = boundY;
        if (p.baseZ > boundZ) p.baseZ = -boundZ;
        if (p.baseZ < -boundZ) p.baseZ = boundZ;

        // Apply scroll drift
        let currentY = p.baseY - scrollDrift;
        if (currentY < -boundY) currentY += boundY * 2;
        if (currentY > boundY) currentY -= boundY * 2;

        let x = p.baseX;
        let y = currentY;
        let z = p.baseZ;

        // 3D Matrix Rotation (Y axis)
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;

        // 3D Matrix Rotation (X axis)
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        // Perspective Projection math
        const scale = fov / (fov + z2 + boundZ * 0.6);
        const px = x1 * scale + width / 2;
        const py = y2 * scale + height / 2;

        // Proximity to mouse
        const dMouseX = px - mouseX;
        const dMouseY = py - mouseY;
        const mouseDist = Math.sqrt(dMouseX * dMouseX + dMouseY * dMouseY);
        const mouseFactor = Math.max(0, 1 - mouseDist / 260);

        return {
          px,
          py,
          pz: z2,
          scale,
          size: p.size,
          mouseFactor,
          pulse: Math.sin(time + p.pulseOffset),
        };
      });

      // Connections array to reference for signal pulses
      const activeConnections = [];

      // 1. Draw 3D Connecting Lines between nearby nodes
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.px < -120 || p1.px > width + 120 || p1.py < -120 || p1.py > height + 120) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist2D = Math.sqrt(dx * dx + dy * dy);

          const maxDist = maxConnectionDist * ((p1.scale + p2.scale) / 2);
          if (dist2D < maxDist) {
            const avgZ = (p1.pz + p2.pz) / 2;
            const depthFactor = Math.max(0.04, Math.min(0.5, (avgZ + boundZ) / (2 * boundZ)));
            const proximityFactor = 1 - dist2D / maxDist;
            const boostFactor = (p1.mouseFactor + p2.mouseFactor) * 0.45;
            const alpha = Math.min(0.9, (proximityFactor * depthFactor + boostFactor) * (isGlobal ? 0.8 : 0.9));

            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = Math.max(0.5, (1.2 + boostFactor) * ((p1.scale + p2.scale) / 2));
            ctx.stroke();

            activeConnections.push({ x1: p1.px, y1: p1.py, x2: p2.px, y2: p2.py, alpha, scale: (p1.scale + p2.scale) / 2 });
          }
        }
      }

      // 2. Draw Moving Data Signal Pulses traveling along neural connections
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.source = Math.floor(Math.random() * projected.length);
          pulse.target = Math.floor(Math.random() * projected.length);
        }

        const p1 = projected[pulse.source];
        const p2 = projected[pulse.target];
        if (!p1 || !p2) return;

        const dx = p1.px - p2.px;
        const dy = p1.py - p2.py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxConnectionDist * 1.5) {
          const pulseX = p1.px + (p2.px - p1.px) * pulse.progress;
          const pulseY = p1.py + (p2.py - p1.py) * pulse.progress;
          const pulseScale = (p1.scale + p2.scale) / 2;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, Math.max(1.5, 2.8 * pulseScale), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(110, 231, 183, ${0.9 * Math.sin(pulse.progress * Math.PI)})`;
          ctx.shadowColor = '#34d399';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 3. Draw Glowing 3D Particle Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (p.px < -60 || p.px > width + 60 || p.py < -60 || p.py > height + 60) continue;

        const depthAlpha = Math.max(0.15, Math.min(0.98, (p.pz + boundZ) / (2 * boundZ)));
        const r = Math.max(1.4, p.size * p.scale * (1 + 0.22 * p.pulse + p.mouseFactor * 0.4));

        // Outer radial aura glow
        const glowRadius = r * (3.4 + p.mouseFactor * 1.5);
        const gradient = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, glowRadius);
        gradient.addColorStop(0, `rgba(52, 211, 153, ${depthAlpha * (0.85 + p.mouseFactor * 0.3)})`);
        gradient.addColorStop(0.45, `rgba(16, 185, 129, ${depthAlpha * 0.35})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.px, p.py, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Solid core particle
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, depthAlpha + 0.2)})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isGlobal]);

  if (isGlobal) {
    return (
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-0 will-change-transform ${className}`}
        style={{ opacity: 0.95 }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none will-change-transform ${className}`}
      style={{ opacity: 0.95 }}
    />
  );
};
