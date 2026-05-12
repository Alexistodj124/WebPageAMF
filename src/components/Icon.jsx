const paths = {
  code: (
    <>
      <path d="M9 8l-5 4 5 4M15 8l5 4-5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l-2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 005.66 0l3-3a4 4 0 10-5.66-5.66L11 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 105.66 5.66L13 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  bank: (
    <>
      <path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="20" r="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 4h2l2.6 12.4a1.5 1.5 0 001.5 1.2h7.4a1.5 1.5 0 001.5-1.1L20 8H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.5-7-10a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 5.5-7 10-7 10h-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12h2l1-2 1 4 1-2h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  truck: (
    <>
      <rect x="2" y="7" width="11" height="9" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 10h4l3 3v3h-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V11l5 3V11l5 3V11l5 3v7H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 21v-3M11 21v-3M16 21v-3" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  arrow: (
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  check: (
    <path d="M5 12l5 5 9-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 13v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
}

function Icon({ name, size = 22, className, ...props }) {
  const path = paths[name]
  if (!path) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {path}
    </svg>
  )
}

export default Icon
