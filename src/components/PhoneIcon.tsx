type PhoneIconProps = {
  className?: string;
};

/** Minimal handset — clear at small sizes on CTA buttons */
export function PhoneIcon({ className = "h-[1.125rem] w-[1.125rem]" }: PhoneIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.6 3.8h2.2c.5 0 .9.3 1 .8l.7 2.8c.2.7-.1 1.4-.7 1.8l-1.4 1c2.1 3.4 4.9 6.2 8.3 8.3l1-1.4c.4-.6 1.1-.9 1.8-.7l2.8.7c.5.1.8.5.8 1v2.2c0 .9-.7 1.6-1.6 1.7-10.2 1.1-18.6-7.3-17.5-17.5.1-.9.8-1.6 1.7-1.6z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
