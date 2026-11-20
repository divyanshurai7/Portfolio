export default function Monogram({ size = 44, title = 'DR monogram' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={title}>
      <circle cx="32" cy="34" r="27" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M22 12c-2.6-.6-3.4-3.6-1.2-4.8 2.4-1.3 4.6 1.4 3 3.6M29 9.5c-1.8-2-.4-4.9 2-4.6 2.6.3 3 3.7.7 4.6M37 10.5c-.4-2.6 2.4-4.2 4.3-2.6 2 1.7.6 4.8-1.9 4.4M43.5 14.5c.8-2.4 4-2.6 4.8-.4.9 2.4-1.9 4.1-3.8 2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <text
        x="32"
        y="45"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="26"
        fontStyle="italic"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-2"
      >
        dr
      </text>
    </svg>
  );
}
