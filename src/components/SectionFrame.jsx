import { LiquidGlassCard } from "./LiquidGlassCard";
import { ResponsiveImage } from "./ResponsiveImage";
import { useReveal } from "./useReveal";

export function SectionFrame({ id, icon, title, action, children, className = "" }) {
  const [ref, isVisible] = useReveal();
  const sectionClassName = [className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={isVisible ? "is-visible" : ""}>
      <LiquidGlassCard id={id} className={sectionClassName}>
      {icon || title || action ? (
        <div className="section-bar">
          <div className="section-bar__title">
            {icon ? <ResponsiveImage image={icon} alt="" className="section-bar__icon" aria-hidden="true" /> : null}
            {title ? <h2>{title}</h2> : null}
          </div>
          {action}
        </div>
      ) : null}
      {children}
      </LiquidGlassCard>
    </div>
  );
}
