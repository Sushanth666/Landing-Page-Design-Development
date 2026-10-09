import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  CheckCircle, 
  Radio, 
  Layers,
  ChevronRight
} from 'lucide-react';

export const DemoVideoPlayer = ({ 
  onOpenAuthModal, 
  initialProgress = 0, 
  initialChapter = 0, 
  onProgressUpdate 
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(initialProgress);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(initialChapter);

  const chapters = [
    {
      title: '01. Stack OAuth Connect',
      time: '0:00',
      progressStart: 0,
      description: 'Zero-config bi-directional synchronization with GitHub, Linear, Slack, and AWS CloudWatch.',
    },
    {
      title: '02. Autonomous Agent DAG',
      time: '0:45',
      progressStart: 25,
      description: 'Real-time multi-agent mesh compiling workflows, resolving PR edge cases, and verifying AST boundaries.',
    },
    {
      title: '03. Self-Healing Rollback',
      time: '1:30',
      progressStart: 55,
      description: 'Detecting runtime latency anomalies and automatically executing safe canary rollbacks in 8 seconds.',
    },
    {
      title: '04. Live Telemetry & SLA',
      time: '2:15',
      progressStart: 80,
      description: 'Aggregating P99 latency and cycle throughput metrics across 32 distributed edge regions.',
    },
  ];

  // Simulated continuous progress ticker when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          onProgressUpdate?.(100, 3);
          return 100;
        }
        const next = prev + 1;
        let nextChapter = 0;
        if (next >= 80) nextChapter = 3;
        else if (next >= 55) nextChapter = 2;
        else if (next >= 25) nextChapter = 1;
        else nextChapter = 0;
        setActiveChapter(nextChapter);
        onProgressUpdate?.(next, nextChapter);
        return next;
      });
    }, 700);
    return () => clearInterval(interval);
  }, [isPlaying, onProgressUpdate]);

  const handleSeek = (newProgress, chapterIdx) => {
    setProgress(newProgress);
    setActiveChapter(chapterIdx);
    setIsPlaying(true);
    onProgressUpdate?.(newProgress, chapterIdx);
  };

  const handleRestart = () => {
    setProgress(0);
    setActiveChapter(0);
    setIsPlaying(true);
    onProgressUpdate?.(0, 0);
  };

  const formatTime = (pct) => {
    const totalSecs = Math.floor((pct / 100) * 165); // 2:45 video
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const [imgError, setImgError] = useState(false);

  return (
    <div className="space-y-4">
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl bg-[#03060a] border border-emerald-950 overflow-hidden shadow-2xl group select-none">
        {/* Actual Walkthrough Recording Media */}
        {!imgError ? (
          <img
            src="/demo-walkthrough.webp"
            alt="AetherFlow Walkthrough Video"
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-90' : 'opacity-40 filter blur-[1px]'
            }`}
          />
        ) : (
          /* High-Tech Animated Simulation Fallback if WebP media is blocked */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#060e18] via-[#04080e] to-[#020508] relative overflow-hidden">
            <div className="absolute inset-0 bg-matrix-grid opacity-30 pointer-events-none" />
            <div className="relative z-10 text-center max-w-md space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 mx-auto flex items-center justify-center animate-pulse">
                <Radio className="w-7 h-7 text-emerald-400 animate-spin-slow" />
              </div>
              <h4 className="text-base font-bold text-white">
                Live Simulation: {chapters[activeChapter].title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {chapters[activeChapter].description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Deterministic Execution • 1.5ms latency</span>
              </div>
            </div>
          </div>
        )}

        {/* Big Center Play / Pause Overlay Button when paused */}
        {!isPlaying && (
          <div 
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xs cursor-pointer z-20 group/play animate-in fade-in duration-200"
          >
            <div className="w-18 h-18 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover/play:scale-115 transition-all duration-300">
              <Play className="w-9 h-9 fill-slate-950 translate-x-0.5" />
            </div>
            <span className="mt-3 text-sm font-bold text-white bg-[#060b13]/80 px-4 py-1.5 rounded-full border border-emerald-950 shadow-md">
              Click to Resume Walkthrough
            </span>
          </div>
        )}

        {/* Live Chapter Overlay Badge (Top Left) */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#060b13]/85 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-2 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isPlaying ? 'animate-ping' : ''}`}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{chapters[activeChapter].title}</span>
          </span>
          <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-black/60 border border-white/10 backdrop-blur-md">
            1080p 60fps
          </span>
        </div>

        {/* Bottom Playback Scrubber & Controls Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 pt-10 z-20 transition-opacity">
          {/* Progress Timeline Scrubber Bar */}
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
              const chIdx = pct >= 80 ? 3 : pct >= 55 ? 2 : pct >= 25 ? 1 : 0;
              handleSeek(pct, chIdx);
            }}
            className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden cursor-pointer relative group/scrub mb-3.5 hover:h-2.5 transition-all"
          >
            {/* Progress Fill */}
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
            {/* Scrubber thumb */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover/scrub:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 7px)` }}
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between text-xs font-semibold text-white">
            <div className="flex items-center gap-3">
              {/* Play / Pause Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all active:scale-95 cursor-pointer shadow-md"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 translate-x-0.5" />}
              </button>

              {/* Replay */}
              <button
                onClick={handleRestart}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Restart Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Timestamp */}
              <span className="font-mono text-slate-300 text-xs ml-1">
                {formatTime(progress)} <span className="text-slate-500">/ 2:45</span>
              </span>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                <span className="text-[11px] hidden sm:inline">{isMuted ? 'Muted' : 'Audio On'}</span>
              </button>

              <button
                onClick={() => {
                  const elem = document.querySelector('.aspect-video');
                  if (elem && elem.requestFullscreen) {
                    elem.requestFullscreen();
                  }
                }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chapter Description Banner */}
      <div className="p-3.5 rounded-xl bg-[#060b13] border border-emerald-950 text-xs flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
        <div className="flex-1">
          <span className="font-bold text-white block mb-0.5">
            {chapters[activeChapter].title}
          </span>
          <span className="text-slate-400 leading-relaxed block">
            {chapters[activeChapter].description}
          </span>
        </div>
      </div>

      {/* Chapter Selection Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        {chapters.map((ch, idx) => (
          <button
            key={idx}
            onClick={() => handleSeek(ch.progressStart, idx)}
            className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
              activeChapter === idx
                ? 'bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-md'
                : 'bg-[#09121d] border-emerald-950 text-slate-400 hover:text-white hover:border-emerald-800'
            }`}
          >
            <div className="text-[10px] font-mono text-emerald-400/80 mb-0.5">{ch.time}</div>
            <div className="text-xs font-semibold truncate text-slate-200">{ch.title.split('. ')[1]}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
