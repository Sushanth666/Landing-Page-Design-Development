import React, { useEffect, useRef } from 'react';

export const Canvas3D = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    // Mouse state for 3D rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0.002;
    let targetRotY = 0.003;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotY = (x / width) * 0.008;
      targetRotX = -(y / height) * 0.008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Nodes creation in spherical coordinate lattice
    const numPoints = 64;
    const radius = Math.min(width, height) * 0.38;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        baseX: radius * Math.cos(theta) * Math.sin(phi),
        baseY: radius * Math.sin(theta) * Math.sin(phi),
        baseZ: radius * Math.cos(phi),
      });
    }

    // Connectors matrix
    const connections = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < radius * 0.6) {
          connections.push([i, j]);
        }
      }
    }

    const fov = 450;
    let pulseAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += (targetRotX - rotX) * 0.05 + 0.001;
      rotY += (targetRotY - rotY) * 0.05 + 0.0015;
      pulseAngle += 0.02;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Rotate and project points
      const projected = points.map((p, idx) => {
        // Breathing pulse
        const pRadius = 1 + 0.06 * Math.sin(pulseAngle + idx * 0.2);
        let x = p.baseX * pRadius;
        let y = p.baseY * pRadius;
        let z = p.baseZ * pRadius;

        // Rotation around Y
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;

        // Rotation around X
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        // 3D Perspective Projection
        const scale = fov / (fov + z2 + radius * 0.5);
        return {
          px: x1 * scale + width / 2,
          py: y2 * scale + height / 2,
          pz: z2,
          scale,
        };
      });

      // Sort connections by avg Z depth for correct opacity blending
      connections.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (p1.pz + p2.pz) / 2;
        const depthAlpha = Math.max(0.04, Math.min(0.4, (avgZ + radius) / (2 * radius)));

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.strokeStyle = `rgba(52, 211, 153, ${depthAlpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw 3D nodes
      projected.forEach((p) => {
        const depthAlpha = Math.max(0.15, Math.min(0.9, (p.pz + radius) / (2 * radius)));
        const nodeRadius = Math.max(1.5, 3.5 * p.scale);

        // Outer glow
        const gradient = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, nodeRadius * 2.8);
        gradient.addColorStop(0, `rgba(52, 211, 153, ${depthAlpha})`);
        gradient.addColorStop(0.5, `rgba(16, 185, 129, ${depthAlpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.px, p.py, nodeRadius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Solid core
        ctx.fillStyle = `rgba(255, 255, 255, ${depthAlpha})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none will-change-transform ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
};
