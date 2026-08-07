/**
 * Composição decorativa inspirada no D Núcleo —
 * módulos conectados, núcleo central e painéis técnicos.
 */
export function FinalCtaVisual() {
  return (
    <div
      className="relative mx-auto h-[11.5rem] w-full max-w-[22rem] overflow-hidden sm:h-[13rem] lg:mx-0 lg:h-[14.5rem] lg:max-w-none"
      aria-hidden
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-6 right-8 h-24 w-24 rounded-full bg-glow/12 blur-2xl" />

      {/* Soft radial depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,rgba(59,91,255,0.14),transparent_62%)]" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 360 232"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="cta-core-fill" cx="0.35" cy="0.3" r="0.75">
            <stop stopColor="#5EA2FF" />
            <stop offset="1" stopColor="#3B5BFF" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="cta-d-stroke" x1="166" y1="96" x2="198" y2="136">
            <stop stopColor="#5EA2FF" />
            <stop offset="1" stopColor="#3B5BFF" />
          </linearGradient>
          <radialGradient id="cta-nucleus" cx="0.4" cy="0.35" r="0.7">
            <stop stopColor="#49D6FF" />
            <stop offset="1" stopColor="#3B5BFF" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        <path
          d="M78 116H128"
          stroke="rgba(94,162,255,0.35)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
        />
        <path
          d="M232 116H282"
          stroke="rgba(73,214,255,0.3)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
        />
        <path
          d="M180 52V78"
          stroke="rgba(94,162,255,0.28)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
        />
        <path
          d="M180 154V180"
          stroke="rgba(59,91,255,0.28)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
        />
        <path
          d="M98 72C120 72 140 96 160 104"
          stroke="rgba(94,162,255,0.22)"
          strokeWidth="1.1"
        />
        <path
          d="M262 72C240 72 220 96 200 104"
          stroke="rgba(73,214,255,0.2)"
          strokeWidth="1.1"
        />
        <path
          d="M98 160C120 160 140 136 160 128"
          stroke="rgba(59,91,255,0.2)"
          strokeWidth="1.1"
        />
        <path
          d="M262 160C240 160 220 136 200 128"
          stroke="rgba(94,162,255,0.18)"
          strokeWidth="1.1"
        />

        {/* Left module cluster */}
        <rect
          x="42"
          y="96"
          width="36"
          height="40"
          rx="7"
          fill="rgba(16,25,56,0.92)"
          stroke="rgba(94,162,255,0.45)"
        />
        <rect
          x="48"
          y="106"
          width="16"
          height="3"
          rx="1.5"
          fill="rgba(94,162,255,0.55)"
        />
        <rect
          x="48"
          y="114"
          width="24"
          height="2.5"
          rx="1.25"
          fill="rgba(245,247,255,0.12)"
        />
        <rect
          x="48"
          y="121"
          width="18"
          height="2.5"
          rx="1.25"
          fill="rgba(245,247,255,0.08)"
        />

        {/* Right module cluster */}
        <rect
          x="282"
          y="96"
          width="36"
          height="40"
          rx="7"
          fill="rgba(16,25,56,0.92)"
          stroke="rgba(73,214,255,0.4)"
        />
        <rect
          x="290"
          y="106"
          width="20"
          height="3"
          rx="1.5"
          fill="rgba(73,214,255,0.5)"
        />
        <rect
          x="290"
          y="114"
          width="14"
          height="2.5"
          rx="1.25"
          fill="rgba(245,247,255,0.12)"
        />
        <rect
          x="290"
          y="121"
          width="18"
          height="2.5"
          rx="1.25"
          fill="rgba(94,162,255,0.28)"
        />

        {/* Top panel */}
        <rect
          x="148"
          y="28"
          width="64"
          height="24"
          rx="6"
          fill="rgba(10,16,48,0.95)"
          stroke="rgba(36,49,95,0.95)"
        />
        <rect
          x="156"
          y="36"
          width="28"
          height="3"
          rx="1.5"
          fill="rgba(94,162,255,0.4)"
        />
        <rect
          x="156"
          y="43"
          width="40"
          height="2.5"
          rx="1.25"
          fill="rgba(245,247,255,0.1)"
        />

        {/* Bottom panel */}
        <rect
          x="148"
          y="180"
          width="64"
          height="24"
          rx="6"
          fill="rgba(10,16,48,0.95)"
          stroke="rgba(36,49,95,0.95)"
        />
        <rect
          x="156"
          y="188"
          width="20"
          height="3"
          rx="1.5"
          fill="rgba(52,211,153,0.45)"
        />
        <rect
          x="180"
          y="188"
          width="24"
          height="3"
          rx="1.5"
          fill="rgba(245,247,255,0.12)"
        />
        <rect
          x="156"
          y="195"
          width="36"
          height="2.5"
          rx="1.25"
          fill="rgba(245,247,255,0.08)"
        />

        {/* Corner nodes */}
        <circle cx="98" cy="72" r="4" fill="rgba(59,91,255,0.35)" stroke="rgba(94,162,255,0.55)" />
        <circle cx="262" cy="72" r="4" fill="rgba(73,214,255,0.25)" stroke="rgba(73,214,255,0.5)" />
        <circle cx="98" cy="160" r="4" fill="rgba(16,25,56,0.9)" stroke="rgba(94,162,255,0.4)" />
        <circle cx="262" cy="160" r="4" fill="rgba(16,25,56,0.9)" stroke="rgba(59,91,255,0.4)" />

        {/* Central D-nucleus core */}
        <circle
          cx="180"
          cy="116"
          r="34"
          fill="rgba(11,18,43,0.85)"
          stroke="rgba(59,91,255,0.45)"
          strokeWidth="1.4"
        />
        <circle
          cx="180"
          cy="116"
          r="24"
          fill="url(#cta-core-fill)"
          fillOpacity="0.35"
          stroke="rgba(94,162,255,0.55)"
          strokeWidth="1.2"
        />
        <path
          d="M166 96h10c12 0 22 9 22 20s-10 20-22 20h-10"
          stroke="url(#cta-d-stroke)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M166 96v40"
          stroke="rgba(94,162,255,0.7)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="180" cy="116" r="6" fill="url(#cta-nucleus)" />
        <circle cx="180" cy="116" r="2.4" fill="#F5F7FF" fillOpacity="0.9" />
      </svg>

      {/* Floating micro panels (CSS layer) */}
      <div className="pointer-events-none absolute top-3 left-3 hidden rounded-md border border-[#24315F]/80 bg-[#101938]/80 px-2 py-1 sm:block">
        <div className="h-1 w-8 rounded-full bg-blue-accent/50" />
        <div className="mt-1 h-1 w-5 rounded-full bg-white/10" />
      </div>
      <div className="pointer-events-none absolute right-3 bottom-3 hidden rounded-md border border-[#24315F]/80 bg-[#101938]/80 px-2 py-1.5 sm:block">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green/80" />
          <span className="h-1 w-10 rounded-full bg-white/12" />
        </div>
      </div>
    </div>
  );
}
