type BrandMarkProps = {
  className?: string;
  size?: number;
};

/** Símbolo provisório D Núcleo — substituível pelo SVG oficial. */
export function BrandMark({ className = "", size = 36 }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="d-mark-stroke" x1="8" y1="6" x2="42" y2="42">
          <stop stopColor="#5EA2FF" />
          <stop offset="1" stopColor="#3B5BFF" />
        </linearGradient>
        <radialGradient id="d-mark-core" cx="0" cy="0" r="1" gradientTransform="translate(26 24) scale(7)">
          <stop stopColor="#49D6FF" />
          <stop offset="1" stopColor="#3B5BFF" />
        </radialGradient>
      </defs>
      <path
        d="M12 8h12c8.837 0 16 7.163 16 16s-7.163 16-16 16H12V8Z"
        stroke="url(#d-mark-stroke)"
        strokeWidth="2.5"
      />
      <path
        d="M18 15h6c4.97 0 9 4.03 9 9s-4.03 9-9 9h-6"
        stroke="#5EA2FF"
        strokeOpacity="0.55"
        strokeWidth="1.75"
      />
      <circle cx="26" cy="24" r="5.5" fill="url(#d-mark-core)" />
      <circle cx="26" cy="24" r="2.2" fill="#F5F7FF" fillOpacity="0.9" />
    </svg>
  );
}
