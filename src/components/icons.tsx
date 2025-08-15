import type { SVGProps } from "react";

export function YarnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11.25 10.25a4.25 4.25 0 1 0 5.5-3.5 4.25 4.25 0 0 0-5.5 3.5Z" />
      <path d="M15 14v2a4 4 0 0 0 4 4h2" />
      <path d="M15 6.75a4.25 4.25 0 1 1-5.5-3.5 4.25 4.25 0 0 1 5.5 3.5Z" />
      <path d="M9.06 14a4.25 4.25 0 1 0-5.5 3.5A4.25 4.25 0 0 0 9.06 14Z" />
      <path d="M9 10v2a4 4 0 0 1-4 4H3" />
      <path d="M7 12a4 4 0 0 0-4-4H1" />
      <path d="M17 12a4 4 0 0 1 4-4h2" />
      <path d="m9.5 7.5 5 5" />
    </svg>
  );
}
