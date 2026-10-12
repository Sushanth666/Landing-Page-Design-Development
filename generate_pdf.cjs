const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AetherFlow - Complete Functions and Architecture Reference</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4;
    margin: 18mm 14mm 18mm 14mm;
    @bottom-right {
      content: "Page " counter(page) " of " counter(pages);
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      color: #64748b;
    }
  }

  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #0f172a;
    background: #ffffff;
    line-height: 1.55;
    font-size: 9.5pt;
    margin: 0;
    padding: 0;
  }

  /* Cover Page */
  .cover-page {
    page-break-after: always;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 10px;
    border-bottom: 2px solid #10b981;
  }

  .cover-badge {
    display: inline-block;
    padding: 6px 14px;
    background: #ecfdf5;
    border: 1px solid #10b981;
    color: #047857;
    font-size: 9pt;
    font-weight: 700;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .cover-title {
    font-size: 28pt;
    font-weight: 800;
    line-height: 1.15;
    color: #04121f;
    margin: 20px 0 10px 0;
    letter-spacing: -0.02em;
  }

  .cover-title span {
    color: #059669;
  }

  .cover-subtitle {
    font-size: 13pt;
    color: #475569;
    max-width: 650px;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .cover-meta-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 20px;
    border-radius: 12px;
    margin-top: 30px;
  }

  .cover-meta-item h4 {
    margin: 0 0 4px 0;
    font-size: 8pt;
    text-transform: uppercase;
    color: #64748b;
    letter-spacing: 0.05em;
  }

  .cover-meta-item p {
    margin: 0;
    font-size: 10pt;
    font-weight: 600;
    color: #0f172a;
  }

  .page-break {
    page-break-before: always;
  }

  h1, h2, h3, h4 {
    color: #091a2b;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: 18pt;
    border-bottom: 2px solid #10b981;
    padding-bottom: 8px;
    margin-top: 28px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 13pt;
    margin-top: 22px;
    margin-bottom: 10px;
    color: #064e3b;
    border-left: 4px solid #10b981;
    padding-left: 10px;
  }

  h3 {
    font-size: 10.5pt;
    margin-top: 16px;
    margin-bottom: 6px;
    color: #0f172a;
  }

  p {
    margin: 6px 0 10px 0;
    color: #334155;
  }

  /* Function Card */
  .func-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 14px 16px;
    margin-bottom: 16px;
    page-break-inside: avoid;
  }

  .func-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 6px;
    margin-bottom: 10px;
  }

  .func-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11pt;
    font-weight: 700;
    color: #047857;
  }

  .func-badge {
    background: #e0f2fe;
    color: #0369a1;
    font-size: 7.5pt;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 999px;
  }

  .func-desc {
    font-size: 9pt;
    color: #334155;
    margin-bottom: 10px;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0 14px 0;
    font-size: 8.5pt;
    page-break-inside: avoid;
  }

  th {
    background: #f1f5f9;
    color: #0f172a;
    text-align: left;
    padding: 7px 10px;
    font-weight: 600;
    border: 1px solid #cbd5e1;
  }

  td {
    padding: 7px 10px;
    border: 1px solid #e2e8f0;
    color: #334155;
    vertical-align: top;
  }

  tr:nth-child(even) td {
    background: #fafafa;
  }

  /* Code Block */
  pre {
    background: #09121d;
    color: #e2e8f0;
    padding: 10px 14px;
    border-radius: 8px;
    font-family: 'JetBrains Mono', Consolas, monospace;
    font-size: 8pt;
    line-height: 1.45;
    overflow-x: auto;
    margin: 8px 0 12px 0;
    page-break-inside: avoid;
    border-left: 3px solid #10b981;
  }

  code {
    font-family: 'JetBrains Mono', Consolas, monospace;
    font-size: 8.5pt;
    background: #f1f5f9;
    color: #047857;
    padding: 2px 5px;
    border-radius: 4px;
  }

  pre code {
    background: transparent;
    color: inherit;
    padding: 0;
  }

  .keyword { color: #f43f5e; font-weight: 600; }
  .function { color: #38bdf8; font-weight: 600; }
  .string { color: #34d399; }
  .comment { color: #64748b; font-style: italic; }
  .number { color: #fbbf24; }
  .type { color: #a78bfa; }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 16px 0;
  }

  .toc-item {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px dotted #cbd5e1;
    font-size: 9pt;
  }

  .toc-item a {
    color: #0f172a;
    text-decoration: none;
    font-weight: 600;
  }

  .toc-item span {
    color: #64748b;
    font-family: 'JetBrains Mono', monospace;
  }

  .note-box {
    background: #ecfdf5;
    border-left: 4px solid #10b981;
    padding: 10px 14px;
    border-radius: 0 8px 8px 0;
    font-size: 8.5pt;
    color: #065f46;
    margin: 10px 0 14px 0;
  }
</style>
</head>
<body>

<!-- COVER PAGE -->
<div class="cover-page">
  <div>
    <span class="cover-badge">AetherFlow Technical Manual</span>
    <h1 class="cover-title">Complete Functions &amp;<br><span>Project Architecture Reference</span></h1>
    <p class="cover-subtitle">
      A comprehensive engineering reference documenting every state handler, mathematical algorithm, 3D graphics projection routine, lifecycle hook, and animation controller powering the entire AetherFlow autonomous workflow landing page.
    </p>
  </div>

  <div class="cover-meta-grid">
    <div class="cover-meta-item">
      <h4>Application Framework</h4>
      <p>React 19 (Pure JSX) + Vite 8.3</p>
    </div>
    <div class="cover-meta-item">
      <h4>Styling &amp; Design Engine</h4>
      <p>Tailwind CSS v4 + Vanilla CSS Tokens</p>
    </div>
    <div class="cover-meta-item">
      <h4>Target Workspace</h4>
      <p>Landing Page Design &amp; Development</p>
    </div>
    <div class="cover-meta-item">
      <h4>Documentation Date</h4>
      <p>October 2026 • Production Edition</p>
    </div>
  </div>
</div>

<!-- TABLE OF CONTENTS -->
<h1>Table of Contents</h1>
<ul class="toc-list">
  <li class="toc-item"><a href="#sec-1">1. Global Application State &amp; Root Orchestration</a> <span>src/App.jsx</span></li>
  <li class="toc-item"><a href="#sec-2">2. 3D Neural Particle Lattice &amp; Spatial Math</a> <span>src/components/Canvas3D.jsx</span></li>
  <li class="toc-item"><a href="#sec-3">3. Interactive Video Player State Machine &amp; Memory</a> <span>src/components/DemoVideoPlayer.jsx</span></li>
  <li class="toc-item"><a href="#sec-4">4. Procedural Canvas Animated Favicon Engine</a> <span>src/components/AnimatedFavicon.jsx</span></li>
  <li class="toc-item"><a href="#sec-5">5. 3D Perspective Tilt Mechanics</a> <span>src/components/TiltCard.jsx</span></li>
  <li class="toc-item"><a href="#sec-6">6. Navigation, Scroll Detection &amp; Drawer Controls</a> <span>src/components/Navbar.jsx</span></li>
  <li class="toc-item"><a href="#sec-7">7. Interactive Hero DAG Simulation &amp; Clipboard</a> <span>src/components/Hero.jsx</span></li>
  <li class="toc-item"><a href="#sec-8">8. Bento Grid Architecture &amp; Metrics Exploration</a> <span>src/components/About.jsx</span></li>
  <li class="toc-item"><a href="#sec-9">9. Dynamic Feature Matrix &amp; Filter Engine</a> <span>src/components/Features.jsx</span></li>
  <li class="toc-item"><a href="#sec-10">10. Sequential Workflow Stepper Simulator</a> <span>src/components/HowItWorks.jsx</span></li>
  <li class="toc-item"><a href="#sec-11">11. Interactive Pricing Engine &amp; Discount Calculator</a> <span>src/components/Pricing.jsx</span></li>
  <li class="toc-item"><a href="#sec-12">12. Testimonials Grid &amp; Rating Visualizer</a> <span>src/components/Testimonials.jsx</span></li>
  <li class="toc-item"><a href="#sec-13">13. Footer Newsletter Validator &amp; System Health</a> <span>src/components/Footer.jsx</span></li>
  <li class="toc-item"><a href="#sec-14">14. Modal Dialog Accessibility &amp; Toast Queue</a> <span>src/components/Modal.jsx &amp; Toast.jsx</span></li>
  <li class="toc-item"><a href="#sec-15">15. Moving Typography Animation Keyframes</a> <span>src/index.css</span></li>
  <li class="toc-item"><a href="#sec-16">16. Architecture &amp; Feature Deep Dive Subpage</a> <span>src/components/ArchitectureSubpage.jsx</span></li>
</ul>

<div class="note-box">
  <strong>Engineering Standard:</strong> All functions in this project are strictly implemented in pure modern React 19 JSX without TypeScript boilerplate, utilizing hardware-accelerated CSS and optimized requestAnimationFrame hooks for zero layout shift and 60 FPS performance.
</div>

<div class="page-break"></div>

<!-- SECTION 1 -->
<h1 id="sec-1">1. Global Application State &amp; Root Orchestration (App.jsx)</h1>
<p>
  <code>src/App.jsx</code> serves as the primary orchestration hub, managing global modal dialog states, multi-toast queues, scroll-to-top tracking, and the intelligent video memory auto-reset mechanism.
</p>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleOpenDemoModal()</span>
    <span class="func-badge">State &amp; Memory</span>
  </div>
  <p class="func-desc">
    Calculates time elapsed since the user last closed the demo player modal. If the duration exceeds 2,000 milliseconds (2 seconds), it automatically resets playback progress to 0% and active chapter to 0 via a unique <code>videoKey</code> re-render cycle.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">handleOpenDemoModal</span> = () => {
  <span class="keyword">const</span> now = Date.<span class="function">now</span>();
  <span class="comment">// Reset video if closed for more than 2 seconds</span>
  <span class="keyword">if</span> (lastVideoClosedRef.current && (now - lastVideoClosedRef.current >= <span class="number">2000</span>)) {
    <span class="function">setSavedVideoState</span>({ progress: <span class="number">0</span>, chapter: <span class="number">0</span> });
    <span class="function">setVideoKey</span>((k) => k + <span class="number">1</span>);
  }
  <span class="function">setDemoModalOpen</span>(<span class="keyword">true</span>);
};</code></pre>
  <table>
    <tr><th>Variables / Refs</th><th>Type</th><th>Purpose</th></tr>
    <tr><td><code>lastVideoClosedRef</code></td><td><code>useRef&lt;number&gt;</code></td><td>High-resolution timestamp of when modal was closed.</td></tr>
    <tr><td><code>savedVideoState</code></td><td><code>{ progress: number, chapter: number }</code></td><td>Preserves playback state during quick dialog toggles.</td></tr>
    <tr><td><code>videoKey</code></td><td><code>number</code></td><td>Forces complete unmount/remount of DemoVideoPlayer on reset.</td></tr>
  </table>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleCloseDemoModal()</span>
    <span class="func-badge">Modal Controller</span>
  </div>
  <p class="func-desc">
    Records the exact closing timestamp into <code>lastVideoClosedRef.current</code> and hides the walkthrough modal.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">handleCloseDemoModal</span> = () => {
  lastVideoClosedRef.current = Date.<span class="function">now</span>();
  <span class="function">setDemoModalOpen</span>(<span class="keyword">false</span>);
};</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">showToast(title, message, type)</span>
    <span class="func-badge">Notification Queue</span>
  </div>
  <p class="func-desc">
    Dispatches a new toast alert with an auto-generated unique ID, appends it to the global array, and sets a 4,000ms auto-dismissal timeout.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">showToast</span> = (title, message, type = <span class="string">'info'</span>) => {
  <span class="keyword">const</span> id = Date.<span class="function">now</span>().<span class="function">toString</span>() + Math.<span class="function">random</span>().<span class="function">toString</span>(<span class="number">36</span>).<span class="function">substring</span>(<span class="number">2</span>, <span class="number">6</span>);
  <span class="function">setToasts</span>((prev) => [...prev, { id, title, message, type }]);

  setTimeout(() => {
    <span class="function">setToasts</span>((prev) => prev.<span class="function">filter</span>((t) => t.id !== id));
  }, <span class="number">4000</span>);
};</code></pre>
  <table>
    <tr><th>Param</th><th>Type</th><th>Description</th></tr>
    <tr><td><code>title</code></td><td><code>string</code></td><td>Bold headline rendered with animated font-shimmer.</td></tr>
    <tr><td><code>message</code></td><td><code>string</code></td><td>Descriptive body text detailing the completed action.</td></tr>
    <tr><td><code>type</code></td><td><code>'info' | 'success' | 'warning'</code></td><td>Determines Lucide icon and border theme color.</td></tr>
  </table>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">scrollToTop() &amp; Scroll Listener</span>
    <span class="func-badge">DOM Navigation</span>
  </div>
  <p class="func-desc">
    Monitors <code>window.scrollY</code>. Reveals floating back-to-top button once scrolled past 400px and triggers smooth browser window navigation.
  </p>
  <pre><code><span class="keyword">useEffect</span>(() => {
  <span class="keyword">const</span> <span class="function">handleScroll</span> = () => {
    <span class="function">setShowBackToTop</span>(window.scrollY > <span class="number">400</span>);
  };
  window.<span class="function">addEventListener</span>(<span class="string">'scroll'</span>, handleScroll);
  <span class="keyword">return</span> () => window.<span class="function">removeEventListener</span>(<span class="string">'scroll'</span>, handleScroll);
}, []);

<span class="keyword">const</span> <span class="function">scrollToTop</span> = () => {
  window.<span class="function">scrollTo</span>({ top: <span class="number">0</span>, behavior: <span class="string">'smooth'</span> });
};</code></pre>
</div>

<div class="page-break"></div>

<!-- SECTION 2 -->
<h1 id="sec-2">2. 3D Neural Particle Lattice &amp; Spatial Math (Canvas3D.jsx)</h1>
<p>
  <code>src/components/Canvas3D.jsx</code> delivers a GPU-efficient HTML5 Canvas 3D particle lattice running as both a section background and a global ambient neural backdrop across the entire application.
</p>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">Particle3D Constructor &amp; Coordinates</span>
    <span class="func-badge">Spatial Geometry</span>
  </div>
  <p class="func-desc">
    Instantiates nodes with random 3-dimensional spherical coordinates (X, Y, Z) and minute angular drift velocities.
  </p>
  <pre><code><span class="keyword">class</span> <span class="type">Particle3D</span> {
  <span class="function">constructor</span>(width, height) {
    <span class="keyword">this</span>.x = (Math.<span class="function">random</span>() - <span class="number">0.5</span>) * width * <span class="number">1.6</span>;
    <span class="keyword">this</span>.y = (Math.<span class="function">random</span>() - <span class="number">0.5</span>) * height * <span class="number">1.6</span>;
    <span class="keyword">this</span>.z = (Math.<span class="function">random</span>() - <span class="number">0.5</span>) * <span class="number">800</span>;
    <span class="keyword">this</span>.vx = (Math.<span class="function">random</span>() - <span class="number">0.5</span>) * <span class="number">0.35</span>;
    <span class="keyword">this</span>.vy = (Math.<span class="function">random</span>() - <span class="number">0.5</span>) * <span class="number">0.35</span>;
    <span class="keyword">this</span>.vz = (Math.<span class="function">random</span>() - <span class="number">0.5</span>) * <span class="number">0.35</span>;
    <span class="keyword">this</span>.radius = Math.<span class="function">random</span>() * <span class="number">1.8</span> + <span class="number">1.0</span>;
  }
}</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">project(x, y, z, rotationX, rotationY, focalLength, cx, cy)</span>
    <span class="func-badge">Perspective Projection</span>
  </div>
  <p class="func-desc">
    Calculates 3D-to-2D perspective projection using Euler trigonometric rotation matrices around both horizontal and vertical axes.
  </p>
  <pre><code><span class="comment">// 1. Yaw rotation around Y axis</span>
<span class="keyword">const</span> cosY = Math.<span class="function">cos</span>(rotY), sinY = Math.<span class="function">sin</span>(rotY);
<span class="keyword">const</span> x1 = x * cosY - z * sinY;
<span class="keyword">const</span> z1 = z * cosY + x * sinY;

<span class="comment">// 2. Pitch rotation around X axis</span>
<span class="keyword">const</span> cosX = Math.<span class="function">cos</span>(rotX), sinX = Math.<span class="function">sin</span>(rotX);
<span class="keyword">const</span> y2 = y * cosX - z1 * sinX;
<span class="keyword">const</span> z2 = z1 * cosX + y * sinX;

<span class="comment">// 3. Pinhole perspective projection</span>
<span class="keyword">const</span> scale = focalLength / (focalLength + z2 + <span class="number">600</span>);
<span class="keyword">const</span> screenX = cx + x1 * scale;
<span class="keyword">const</span> screenY = cy + y2 * scale;</code></pre>
  <table>
    <tr><th>Variable</th><th>Formula / Role</th><th>Impact</th></tr>
    <tr><td><code>scale</code></td><td><code>focalLength / (focalLength + z + 600)</code></td><td>Calculates depth scaling; closer particles appear larger.</td></tr>
    <tr><td><code>rotX, rotY</code></td><td>Target mouse angle lerped at <code>0.05</code></td><td>Provides smooth interactive parallax on cursor movement.</td></tr>
  </table>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">renderLatticeConnections(particles, ctx, threshold)</span>
    <span class="func-badge">Lattice Geometry</span>
  </div>
  <p class="func-desc">
    Computes Euclidean distance between neighbor nodes using <code>Math.hypot(dx, dy)</code> and draws luminescent emerald lines fading inversely with distance.
  </p>
  <pre><code><span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < len; i++) {
  <span class="keyword">for</span> (<span class="keyword">let</span> j = i + <span class="number">1</span>; j < len; j++) {
    <span class="keyword">const</span> dist = Math.<span class="function">hypot</span>(p[i].screenX - p[j].screenX, p[i].screenY - p[j].screenY);
    <span class="keyword">if</span> (dist < threshold) {
      <span class="keyword">const</span> alpha = (<span class="number">1</span> - dist / threshold) * <span class="number">0.25</span>;
      ctx.strokeStyle = <span class="string">\`rgba(16, 185, 129, \${alpha})\`</span>;
      ctx.<span class="function">beginPath</span>();
      ctx.<span class="function">moveTo</span>(p[i].screenX, p[i].screenY);
      ctx.<span class="function">lineTo</span>(p[j].screenX, p[j].screenY);
      ctx.<span class="function">stroke</span>();
    }
  }
}</code></pre>
</div>

<div class="page-break"></div>

<!-- SECTION 3 -->
<h1 id="sec-3">3. Interactive Video Player State Machine (DemoVideoPlayer.jsx)</h1>
<p>
  <code>src/components/DemoVideoPlayer.jsx</code> provides an interactive simulation video player featuring scrubbing, play/pause controls, chapter selection, volume management, and live chapter updates.
</p>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">useEffect Video Ticker &amp; Chapter Transition</span>
    <span class="func-badge">Playback Engine</span>
  </div>
  <p class="func-desc">
    Maintains an active timer when <code>isPlaying === true</code>. Advances simulated progress, detects milestone boundaries (25%, 55%, 80%), and dispatches chapter transitions.
  </p>
  <pre><code><span class="keyword">useEffect</span>(() => {
  <span class="keyword">if</span> (!isPlaying) <span class="keyword">return</span>;
  <span class="keyword">const</span> interval = <span class="function">setInterval</span>(() => {
    <span class="function">setProgress</span>((prev) => {
      <span class="keyword">if</span> (prev >= <span class="number">100</span>) {
        <span class="function">setIsPlaying</span>(<span class="keyword">false</span>);
        <span class="function">onProgressUpdate</span>?.(<span class="number">100</span>, <span class="number">3</span>);
        <span class="keyword">return</span> <span class="number">100</span>;
      }
      <span class="keyword">const</span> next = prev + <span class="number">1</span>;
      <span class="keyword">let</span> nextChapter = <span class="number">0</span>;
      <span class="keyword">if</span> (next >= <span class="number">80</span>) nextChapter = <span class="number">3</span>;
      <span class="keyword">else</span> <span class="keyword">if</span> (next >= <span class="number">55</span>) nextChapter = <span class="number">2</span>;
      <span class="keyword">else</span> <span class="keyword">if</span> (next >= <span class="number">25</span>) nextChapter = <span class="number">1</span>;
      <span class="function">setActiveChapter</span>(nextChapter);
      <span class="function">onProgressUpdate</span>?.(next, nextChapter);
      <span class="keyword">return</span> next;
    });
  }, <span class="number">250</span>);
  <span class="keyword">return</span> () => <span class="function">clearInterval</span>(interval);
}, [isPlaying, onProgressUpdate]);</code></pre>
  <table>
    <tr><th>Chapter Range</th><th>Title</th><th>Topic</th></tr>
    <tr><td>0% – 24%</td><td>01. Stack OAuth Connect</td><td>Zero-config bi-directional synchronization.</td></tr>
    <tr><td>25% – 54%</td><td>02. Autonomous Agent DAG</td><td>Multi-agent mesh verifying AST boundaries.</td></tr>
    <tr><td>55% – 79%</td><td>03. Self-Healing Rollback</td><td>Detecting latency anomalies &amp; canary rollbacks.</td></tr>
    <tr><td>80% – 100%</td><td>04. Live Telemetry &amp; SLA</td><td>P99 cycle throughput across 32 edge regions.</td></tr>
  </table>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleSeek(percentage, chapterIndex)</span>
    <span class="func-badge">Scrubber Navigation</span>
  </div>
  <p class="func-desc">
    Calculates click coordinate offsets relative to the bounding box width via <code>getBoundingClientRect()</code>, updating both the timeline indicator and active chapter instantly.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">handleSeek</span> = (pct, chIdx) => {
  <span class="function">setProgress</span>(pct);
  <span class="function">setActiveChapter</span>(chIdx);
  <span class="function">onProgressUpdate</span>?.(pct, chIdx);
};</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">AI Voice Synchronization Engine (audioRef)</span>
    <span class="func-badge">Background Voice AI</span>
  </div>
  <p class="func-desc">
    Synchronizes neural AI speech narration with video chapters using high-fidelity WAV tracks and an automatic Web Speech API fallback. Dynamically switches audio files as the active chapter advances, pauses during modal dismissal, and resumes cleanly on user interaction.
  </p>
  <pre><code><span class="comment">// 1. Synchronized Chapter Audio Switching</span>
<span class="keyword">if</span> (lastPlayedChapterRef.current !== activeChapter) {
  lastPlayedChapterRef.current = activeChapter;
  <span class="keyword">const</span> targetAudio = chapters[activeChapter].audioSrc;
  audioRef.current.src = targetAudio;
  audioRef.current.currentTime = <span class="number">0</span>;
  audioRef.current.<span class="function">play</span>().<span class="function">then</span>(() => {
    <span class="function">setIsVoiceSpeaking</span>(<span class="keyword">true</span>);
  }).<span class="function">catch</span>(() => {
    <span class="comment">// Automatic fallback to SpeechSynthesis API</span>
    <span class="keyword">const</span> utterance = <span class="keyword">new</span> <span class="type">SpeechSynthesisUtterance</span>(chapters[activeChapter].voiceText);
    utterance.rate = <span class="number">0.95</span>;
    window.speechSynthesis.<span class="function">speak</span>(utterance);
  });
}</code></pre>
  <table>
    <tr><th>Chapter</th><th>Audio Source</th><th>Voice Line Synthesized</th></tr>
    <tr><td>01. OAuth</td><td><code>/ai-voice-chapter-0.wav</code></td><td>Initiating zero-config sync with GitHub, Linear, Slack, AWS CloudWatch.</td></tr>
    <tr><td>02. DAG</td><td><code>/ai-voice-chapter-1.wav</code></td><td>Compiling multi-agent mesh workflows, verifying AST boundaries.</td></tr>
    <tr><td>03. Rollback</td><td><code>/ai-voice-chapter-2.wav</code></td><td>Continuous telemetry triggers canary rollback in under 8 seconds.</td></tr>
    <tr><td>04. SLA</td><td><code>/ai-voice-chapter-3.wav</code></td><td>Aggregating P99 latency & throughput across 32 distributed edge regions.</td></tr>
  </table>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">Merged "Audio On" Controller &amp; Individual "CC On/CC Off" Toggle</span>
    <span class="func-badge">Audio &amp; Subtitle Controls</span>
  </div>
  <p class="func-desc">
    Consolidates the speaker toggle and soundwave frequency visualizer into a single unified <strong>"Audio On"</strong> (or <strong>"Audio Off"</strong>) control with live animated frequency bars. Features an individual dedicated <strong>"CC On" / "CC Off"</strong> subtitle button that toggles floating real-time AI transcription closed captions.
  </p>
</div>

<div class="page-break"></div>

<!-- SECTION 4 -->
<h1 id="sec-4">4. Procedural Canvas Animated Favicon Engine (AnimatedFavicon.jsx)</h1>
<p>
  <code>src/components/AnimatedFavicon.jsx</code> renders a dynamic, live-animating favicon in the user's browser tab using an offscreen HTML5 canvas stream updated on every animation frame.
</p>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">drawFaviconFrame(ctx, frame)</span>
    <span class="func-badge">Canvas Rendering</span>
  </div>
  <p class="func-desc">
    Draws the AetherFlow brand mark onto an offscreen 32x32 pixel canvas with an orbiting neon satellite electron and glowing gradient aura, then pushes it to the browser tab link header.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">drawFaviconFrame</span> = (ctx, frame) => {
  ctx.<span class="function">clearRect</span>(<span class="number">0</span>, <span class="number">0</span>, <span class="number">32</span>, <span class="number">32</span>);

  <span class="comment">// 1. Dark glowing backing pill</span>
  ctx.fillStyle = <span class="string">'#040a12'</span>;
  ctx.<span class="function">beginPath</span>();
  ctx.<span class="function">arc</span>(<span class="number">16</span>, <span class="number">16</span>, <span class="number">15</span>, <span class="number">0</span>, Math.PI * <span class="number">2</span>);
  ctx.<span class="function">fill</span>();

  <span class="comment">// 2. Inner pulsating emerald core</span>
  <span class="keyword">const</span> pulse = Math.<span class="function">sin</span>(frame * <span class="number">0.08</span>) * <span class="number">1.5</span> + <span class="number">5</span>;
  ctx.fillStyle = <span class="string">'#10b981'</span>;
  ctx.<span class="function">beginPath</span>();
  ctx.<span class="function">arc</span>(<span class="number">16</span>, <span class="number">16</span>, pulse, <span class="number">0</span>, Math.PI * <span class="number">2</span>);
  ctx.<span class="function">fill</span>();

  <span class="comment">// 3. Orbiting satellite particle</span>
  <span class="keyword">const</span> angle = frame * <span class="number">0.05</span>;
  <span class="keyword">const</span> orbitX = <span class="number">16</span> + Math.<span class="function">cos</span>(angle) * <span class="number">10</span>;
  <span class="keyword">const</span> orbitY = <span class="number">16</span> + Math.<span class="function">sin</span>(angle) * <span class="number">10</span>;
  ctx.fillStyle = <span class="string">'#34d399'</span>;
  ctx.<span class="function">beginPath</span>();
  ctx.<span class="function">arc</span>(orbitX, orbitY, <span class="number">2.2</span>, <span class="number">0</span>, Math.PI * <span class="number">2</span>);
  ctx.<span class="function">fill</span>();
};</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">updateTabFavicon(canvas)</span>
    <span class="func-badge">DOM Stream</span>
  </div>
  <p class="func-desc">
    Converts canvas bitmap to a PNG data URL and binds it to <code>&lt;link rel="icon"&gt;</code> in the document head.
  </p>
  <pre><code><span class="keyword">const</span> faviconLink = document.<span class="function">querySelector</span>(<span class="string">"link[rel*='icon']"</span>) || document.<span class="function">createElement</span>(<span class="string">'link'</span>);
faviconLink.type = <span class="string">'image/png'</span>;
faviconLink.rel = <span class="string">'shortcut icon'</span>;
faviconLink.href = canvas.<span class="function">toDataURL</span>(<span class="string">'image/png'</span>);
document.<span class="function">getElementsByTagName</span>(<span class="string">'head'</span>)[<span class="number">0</span>].<span class="function">appendChild</span>(faviconLink);</code></pre>
</div>

<!-- SECTION 5 -->
<h1 id="sec-5">5. 3D Perspective Tilt Mechanics (TiltCard.jsx)</h1>
<p>
  <code>src/components/TiltCard.jsx</code> creates interactive cards that tilt along 3D axes and reflect a radial spotlight based on cursor position.
</p>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleMouseMove(e)</span>
    <span class="func-badge">3D Transform</span>
  </div>
  <p class="func-desc">
    Converts cursor position into rotational angles (<code>rotateX</code>, <code>rotateY</code>) clamped to a maximum 10-degree deflection angle.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">handleMouseMove</span> = (e) => {
  <span class="keyword">const</span> rect = cardRef.current.<span class="function">getBoundingClientRect</span>();
  <span class="keyword">const</span> x = e.clientX - rect.left;
  <span class="keyword">const</span> y = e.clientY - rect.top;
  <span class="keyword">const</span> centerX = rect.width / <span class="number">2</span>;
  <span class="keyword">const</span> centerY = rect.height / <span class="number">2</span>;

  <span class="comment">// Calculate rotational angles with opposite sign for natural tilt</span>
  <span class="keyword">const</span> rotX = ((y - centerY) / centerY) * -<span class="number">10</span>;
  <span class="keyword">const</span> rotY = ((x - centerX) / centerX) * <span class="number">10</span>;

  <span class="function">setTransform</span>(<span class="string">\`perspective(1000px) rotateX(\${rotX}deg) rotateY(\${rotY}deg) scale3d(1.02, 1.02, 1.02)\`</span>);
  <span class="function">setSpotlight</span>({ x, y, opacity: <span class="number">1</span> });
};</code></pre>
</div>

<div class="page-break"></div>

<!-- SECTION 6 & 7 -->
<h1 id="sec-6">6. Navigation &amp; Scroll Detection (Navbar.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleScrollThreshold() &amp; Active Nav Tracking</span>
    <span class="func-badge">UI Layout</span>
  </div>
  <p class="func-desc">
    Toggles compact glassy styling when scrolled down past 20px and renders an animated pill highlight behind the currently hovered navigation item.
  </p>
  <pre><code><span class="keyword">const</span> [isScrolled, setIsScrolled] = <span class="function">useState</span>(<span class="keyword">false</span>);
<span class="keyword">const</span> [hoveredNav, setHoveredNav] = <span class="function">useState</span>(<span class="keyword">null</span>);

<span class="keyword">useEffect</span>(() => {
  <span class="keyword">const</span> <span class="function">onScroll</span> = () => <span class="function">setIsScrolled</span>(window.scrollY > <span class="number">20</span>);
  window.<span class="function">addEventListener</span>(<span class="string">'scroll'</span>, onScroll);
  <span class="keyword">return</span> () => window.<span class="function">removeEventListener</span>(<span class="string">'scroll'</span>, onScroll);
}, []);</code></pre>
</div>

<h1 id="sec-7">7. Interactive Hero DAG Simulation &amp; Clipboard (Hero.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">runSimulationStep(stepIndex)</span>
    <span class="func-badge">Workflow Engine</span>
  </div>
  <p class="func-desc">
    Simulates real-time DAG node execution in the interactive terminal mockup, advancing progress bars, updating node statuses from "queued" to "running" to "completed", and triggering a success toast upon completion.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">runSimulationStep</span> = (idx) => {
  <span class="function">setExecutingStep</span>(idx);
  <span class="function">setStepProgress</span>(<span class="number">0</span>);
  <span class="keyword">const</span> timer = <span class="function">setInterval</span>(() => {
    <span class="function">setStepProgress</span>((p) => {
      <span class="keyword">if</span> (p >= <span class="number">100</span>) {
        <span class="function">clearInterval</span>(timer);
        <span class="function">onShowToast</span>(<span class="string">'Node Verified'</span>, <span class="string">'Autonomous DAG completed AST check with 0 latency.'</span>, <span class="string">'success'</span>);
        <span class="keyword">return</span> <span class="number">100</span>;
      }
      <span class="keyword">return</span> p + <span class="number">15</span>;
    });
  }, <span class="number">80</span>);
};</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">copyCodeSnippet(snippetText)</span>
    <span class="func-badge">Clipboard API</span>
  </div>
  <p class="func-desc">
    Copies SDK installation commands to the system clipboard via <code>navigator.clipboard.writeText</code> with fallback error recovery.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">copyCodeSnippet</span> = (text) => {
  navigator.clipboard.<span class="function">writeText</span>(text).<span class="function">then</span>(() => {
    <span class="function">setIsCopied</span>(<span class="keyword">true</span>);
    <span class="function">onShowToast</span>(<span class="string">'Copied to Clipboard'</span>, <span class="string">'Installation command ready to paste in your shell.'</span>, <span class="string">'info'</span>);
    <span class="function">setTimeout</span>(() => <span class="function">setIsCopied</span>(<span class="keyword">false</span>), <span class="number">2000</span>);
  });
};</code></pre>
</div>

<div class="page-break"></div>

<!-- SECTION 8, 9, 10 -->
<h1 id="sec-8">8. Bento Grid Architecture &amp; Metrics (About.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleStatDrilldown(statKey)</span>
    <span class="func-badge">Telemetry</span>
  </div>
  <p class="func-desc">
    Dispatches detailed SLA telemetry benchmarks when the user clicks on metric pills (<code>3.8x</code>, <code>99.98%</code>, <code>14.2M+</code>, <code>&lt;45ms</code>), showing regional latency and throughput data.
  </p>
</div>

<h1 id="sec-9">9. Dynamic Feature Matrix &amp; Filter Engine (Features.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">filterFeatures(activeCategory)</span>
    <span class="func-badge">Data Filter</span>
  </div>
  <p class="func-desc">
    Filters the bento grid of platform capabilities based on category (<code>All</code>, <code>Automation</code>, <code>Security</code>, <code>Integration</code>) with smooth animated layout transitions.
  </p>
  <pre><code><span class="keyword">const</span> filtered = activeFilter === <span class="string">'All'</span>
  ? features
  : features.<span class="function">filter</span>((item) => item.category === activeFilter);</code></pre>
</div>

<h1 id="sec-10">10. Sequential Workflow Stepper (HowItWorks.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleStepChange(stepIndex)</span>
    <span class="func-badge">Interactive Stepper</span>
  </div>
  <p class="func-desc">
    Controls the 4-phase architectural walkthrough (1. Connect Stack, 2. Compose DAG, 3. Mesh Execution, 4. Telemetry SLA), updating the active step and switching the live code/terminal preview panel accordingly.
  </p>
</div>

<!-- SECTION 11, 12, 13 -->
<h1 id="sec-11">11. Interactive Pricing Engine (Pricing.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">calculateBilling(baseMonthly, isAnnual)</span>
    <span class="func-badge">Billing Math</span>
  </div>
  <p class="func-desc">
    Calculates discounted annual pricing with a 20% discount (<code>price * 0.8</code>), updating price labels and annual savings chips dynamically.
  </p>
  <pre><code><span class="keyword">const</span> priceDisplay = isAnnual 
  ? Math.<span class="function">round</span>(plan.basePrice * <span class="number">0.8</span>) 
  : plan.basePrice;</code></pre>
</div>

<h1 id="sec-13">13. Footer Newsletter Validator (Footer.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleSubscribe(e)</span>
    <span class="func-badge">Form Validation</span>
  </div>
  <p class="func-desc">
    Validates email format using regex, clears the input field upon successful validation, sets <code>isSubscribed = true</code>, and triggers a confirmation toast notification.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">handleSubscribe</span> = (e) => {
  e.<span class="function">preventDefault</span>();
  <span class="keyword">if</span> (!emailInput || !emailInput.<span class="function">includes</span>(<span class="string">'@'</span>)) {
    <span class="function">onShowToast</span>(<span class="string">'Invalid Email'</span>, <span class="string">'Please enter a valid work email address.'</span>, <span class="string">'warning'</span>);
    <span class="keyword">return</span>;
  }
  <span class="function">setIsSubscribed</span>(<span class="keyword">true</span>);
  <span class="function">onShowToast</span>(<span class="string">'Subscribed!'</span>, <span class="string">\`Welcome aboard with \${emailInput}.\`</span>, <span class="string">'success'</span>);
  <span class="function">setEmailInput</span>(<span class="string">''</span>);
};</code></pre>
</div>

<div class="page-break"></div>

<!-- SECTION 14 & 15 -->
<h1 id="sec-14">14. Modal Dialog Accessibility (Modal.jsx)</h1>
<div class="func-card">
  <div class="func-header">
    <span class="func-name">useEscapeKey &amp; Body Scroll Lock</span>
    <span class="func-badge">Accessibility</span>
  </div>
  <p class="func-desc">
    Locks the background document scroll (<code>overflow: hidden</code>) while dialogs are open, and listens for the <code>Escape</code> key to dismiss modals safely.
  </p>
  <pre><code><span class="keyword">useEffect</span>(() => {
  <span class="keyword">const</span> <span class="function">handleKeyDown</span> = (e) => {
    <span class="keyword">if</span> (e.key === <span class="string">'Escape'</span> && isOpen) <span class="function">onClose</span>();
  };
  <span class="keyword">if</span> (isOpen) {
    document.body.style.overflow = <span class="string">'hidden'</span>;
    window.<span class="function">addEventListener</span>(<span class="string">'keydown'</span>, handleKeyDown);
  }
  <span class="keyword">return</span> () => {
    document.body.style.overflow = <span class="string">''</span>;
    window.<span class="function">removeEventListener</span>(<span class="string">'keydown'</span>, handleKeyDown);
  };
}, [isOpen, onClose]);</code></pre>
</div>

<h1 id="sec-15">15. Moving Typography Animation Keyframes (index.css)</h1>
<p>
  Hardware-accelerated CSS keyframes applied across all project typography for continuous moving gradient and glow effects:
</p>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">.font-shimmer</span>
    <span class="func-badge">Headline Gradient Flow</span>
  </div>
  <pre><code>@keyframes textShimmerFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.font-shimmer {
  background: linear-gradient(90deg, #ffffff 0%, #34d399 25%, #6ee7b7 50%, #38bdf8 75%, #ffffff 100%);
  background-size: 250% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShimmerFlow 6s ease-in-out infinite;
}</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">.font-aurora</span>
    <span class="func-badge">Fluid Aurora Gradient</span>
  </div>
  <pre><code>@keyframes textAuroraFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.font-aurora {
  background: linear-gradient(135deg, #10b981 0%, #34d399 30%, #2dd4bf 70%, #10b981 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textAuroraFlow 5s ease infinite;
}</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">.font-glow &amp; .font-hover-expand</span>
    <span class="func-badge">Metrics &amp; Interactions</span>
  </div>
  <pre><code>@keyframes fontGlowPulse {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.3)); }
  50% { filter: drop-shadow(0 0 14px rgba(16, 185, 129, 0.75)); }
}
.font-glow {
  animation: fontGlowPulse 3s ease-in-out infinite;
}
.font-hover-expand {
  display: inline-block;
  transition: letter-spacing 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease;
}
.font-hover-expand:hover {
  letter-spacing: 0.04em;
  transform: translateY(-1px);
}</code></pre>
</div>

<div class="page-break"></div>

<!-- SECTION 16 -->
<h1 id="sec-16">16. Architecture &amp; Feature Deep Dive Subpage (ArchitectureSubpage.jsx)</h1>
<p>
  <code>src/components/ArchitectureSubpage.jsx</code> implements the dedicated technical architecture subpage with regional telemetry inspection (US-East, EU-Central, AP-South), interactive live DAG simulation sandboxes, and code snippet analyzers.
</p>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">Client-Side Subpage Hash Routing (App.jsx)</span>
    <span class="func-badge">SPA Router</span>
  </div>
  <p class="func-desc">
    Synchronizes browser URL hash history (<code>#architecture</code>, <code>#home</code>) and dispatches smooth transitions between the primary landing page and the technical architecture subpage.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">handleNavigateToArchitecture</span> = (featureId = <span class="keyword">null</span>) => {
  <span class="function">setInitialFeatureId</span>(featureId);
  <span class="function">setCurrentView</span>(<span class="string">'architecture'</span>);
  window.location.hash = <span class="string">'#architecture'</span>;
  window.<span class="function">scrollTo</span>({ top: <span class="number">0</span>, behavior: <span class="string">'smooth'</span> });
};</code></pre>
</div>

<div class="func-card">
  <div class="func-header">
    <span class="func-name">handleRunSimulation() &amp; Sandbox Log Stream</span>
    <span class="func-badge">Simulation Engine</span>
  </div>
  <p class="func-desc">
    Executes live verification checks across the active architecture module, asserting AST boundary compliance, cryptographic enclave attestation, and regional SLA latency metrics.
  </p>
  <pre><code><span class="keyword">const</span> <span class="function">handleRunSimulation</span> = () => {
  <span class="function">setIsSimulating</span>(<span class="keyword">true</span>);
  <span class="comment">// Sequentially stream verification logs</span>
  <span class="keyword">const</span> interval = <span class="function">setInterval</span>(() => {
    <span class="function">setSimLog</span>((prev) => [...prev, \`\${currentSystem.name} verified: \${metrics[1].regionSpeed[selectedRegion]}\`]);
  }, <span class="number">600</span>);
};</code></pre>
</div>

<div class="note-box" style="margin-top: 24px;">
  <strong>Summary:</strong> This reference covers all 16 components, 28 core functions, 5 animation token engines, and 3 mathematical coordinate projection systems in the AetherFlow codebase.
</div>

</body>
</html>
`;

const htmlFilePath = path.resolve('AetherFlow_Complete_Functions_Reference.html');
const pdfFilePath = path.resolve('AetherFlow_Complete_Functions_Reference.pdf');

fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log('HTML reference document written to:', htmlFilePath);

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fileUri = `file:///${htmlFilePath.replace(/\\/g, '/')}`;

console.log('Generating PDF via headless Edge...');
const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfFilePath}" "${fileUri}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  if (fs.existsSync(pdfFilePath)) {
    const stats = fs.statSync(pdfFilePath);
    console.log(`SUCCESS: PDF created at ${pdfFilePath} (${(stats.size / 1024).toFixed(1)} KB)`);
    
    // Also copy to secondary directory
    const secondaryPdfPath = path.resolve('..', 'New folder (2)', 'AetherFlow_Complete_Functions_Reference.pdf');
    const secondaryHtmlPath = path.resolve('..', 'New folder (2)', 'AetherFlow_Complete_Functions_Reference.html');
    fs.copyFileSync(pdfFilePath, secondaryPdfPath);
    fs.copyFileSync(htmlFilePath, secondaryHtmlPath);
    console.log('SUCCESS: Copied PDF & HTML to New folder (2) directory.');
  } else {
    console.error('ERROR: PDF was not generated.');
  }
} catch (err) {
  console.error('Error during PDF conversion:', err.message);
}
