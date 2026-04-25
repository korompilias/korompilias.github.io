export function ExternalLinkCard({ className = "", href, children, ariaLabel }) {
  const classes = className || "";

  return (
    <a className={classes} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
}
