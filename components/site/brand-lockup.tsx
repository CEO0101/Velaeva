type BrandMarkProps = {
  className?: string;
};

type BrandLockupProps = {
  className?: string;
  textClassName?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-[1.1rem] border border-[#123b6b]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,241,232,0.9)_100%)] shadow-[0_10px_22px_rgba(19,38,61,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="h-6 w-6"
        fill="none"
      >
        <circle cx="20" cy="20" r="16.5" stroke="#7A7D48" strokeWidth="1.6" />
        <path
          d="M9.5 16.5c2.2-1.1 4.4-1.4 6.2-.8M24.4 9.9c.8 2 2.2 3.4 4.3 4.3"
          stroke="#7A7D48"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          d="M14 12.8c1.6 9 4.1 14.7 6 14.7 2 0 4.4-5.7 6-14.7"
          stroke="#13263D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
        />
      </svg>
    </span>
  );
}

export function BrandLockup({
  className = "",
  textClassName = "",
}: BrandLockupProps) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <BrandMark />
      <span
        className={`truncate text-sm font-semibold uppercase tracking-[0.22em] text-foreground ${textClassName}`}
      >
        Velaeva
      </span>
    </span>
  );
}
