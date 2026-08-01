export function DNucleusHero({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto aspect-square w-full max-w-[460px] ${className}`}
      aria-hidden
    >
      <div className="absolute inset-[8%] rounded-full bg-blue-primary/20 blur-3xl" />
      <div className="absolute inset-[18%] rounded-full border border-border/70 bg-bg-secondary/50" />
      <div className="absolute inset-[26%] rounded-full border border-blue-accent/25" />
      <div className="absolute inset-[34%] rounded-full border border-glow/15" />

      <svg
        viewBox="0 0 420 420"
        className="relative h-full w-full drop-shadow-[0_0_40px_rgba(59,91,255,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="d-hero-body" x1="70" y1="40" x2="340" y2="360">
            <stop stopColor="#5EA2FF" />
            <stop offset="0.55" stopColor="#3B5BFF" />
            <stop offset="1" stopColor="#0B122B" />
          </linearGradient>
          <linearGradient id="d-hero-edge" x1="90" y1="70" x2="300" y2="300">
            <stop stopColor="#49D6FF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#3B5BFF" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="d-hero-core" cx="0" cy="0" r="1" gradientTransform="translate(235 210) scale(54)">
            <stop stopColor="#F5F7FF" />
            <stop offset="0.35" stopColor="#49D6FF" />
            <stop offset="1" stopColor="#3B5BFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Tech lines */}
        <path d="M48 120h56" stroke="#5EA2FF" strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M48 150h38" stroke="#49D6FF" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M330 270h52" stroke="#5EA2FF" strokeOpacity="0.3" strokeWidth="1.5" />
        <path d="M345 300h40" stroke="#49D6FF" strokeOpacity="0.2" strokeWidth="1.5" />
        <circle cx="48" cy="120" r="3" fill="#5EA2FF" fillOpacity="0.7" />
        <circle cx="382" cy="270" r="3" fill="#49D6FF" fillOpacity="0.6" />

        {/* Modular D blocks */}
        <path
          d="M118 78h96c66 0 120 54 120 120s-54 120-120 120h-96V78Z"
          fill="url(#d-hero-body)"
          fillOpacity="0.18"
          stroke="url(#d-hero-edge)"
          strokeWidth="10"
        />
        <path
          d="M152 118h62c40 0 72 32 72 72s-32 72-72 72h-62"
          stroke="#5EA2FF"
          strokeOpacity="0.55"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <rect x="132" y="108" width="28" height="28" rx="6" fill="#3B5BFF" fillOpacity="0.55" />
        <rect x="132" y="188" width="28" height="28" rx="6" fill="#5EA2FF" fillOpacity="0.35" />
        <rect x="132" y="268" width="28" height="28" rx="6" fill="#3B5BFF" fillOpacity="0.45" />
        <rect x="248" y="148" width="22" height="22" rx="5" fill="#49D6FF" fillOpacity="0.28" />
        <rect x="276" y="196" width="22" height="22" rx="5" fill="#5EA2FF" fillOpacity="0.35" />
        <rect x="248" y="244" width="22" height="22" rx="5" fill="#3B5BFF" fillOpacity="0.4" />

        {/* Nucleus */}
        <circle cx="235" cy="210" r="46" fill="url(#d-hero-core)" />
        <circle cx="235" cy="210" r="16" fill="#F5F7FF" fillOpacity="0.95" />
        <circle cx="235" cy="210" r="7" fill="#49D6FF" />
      </svg>
    </div>
  );
}
