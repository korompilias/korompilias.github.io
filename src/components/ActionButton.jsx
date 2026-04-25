export function ActionButton({ href, children, ariaLabel }) {
  return (
    <a className="action-button" href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      <span className="action-button__label">{children}</span>
      <span className="action-button__icon" aria-hidden="true">
        {"›"}
      </span>
    </a>
  );
}
