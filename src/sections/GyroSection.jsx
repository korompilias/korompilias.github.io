import { ActionButton } from "../components/ActionButton";
import { LiquidGlassCard } from "../components/LiquidGlassCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { useReveal } from "../components/useReveal";

export function GyroSection() {
  const [ref, isVisible] = useReveal();

  return (
    <div ref={ref} className={isVisible ? "is-visible" : ""}>
      <LiquidGlassCard className="feature-card feature-card--brand">
        <div className="feature-banner">
          <div className="feature-banner__logo-wrap">
            <ResponsiveImage
              image={{
                src: "/assets/images/gyrogovernance_logo-300x300.png",
                webpSrcSet: "/assets/images/gyrogovernance_logo.webp 1024w",
                sizes: "64px",
              }}
              className="feature-banner__logo"
              alt="Gyro Governance logo"
            />
          </div>
          <h2>Gyro Governance</h2>
          <p>Advancing AI safety through alignment research, evaluation tools, and governance architectures.</p>
          <div className="feature-banner__stats">
            <span><strong>7+</strong> Projects</span>
            <span><strong>20+</strong> Papers</span>
            <span><strong>60+</strong> Experiments</span>
          </div>
          <div className="feature-banner__actions">
            <ActionButton href="https://gyrogovernance.com/">Website</ActionButton>
            <ActionButton href="https://github.com/gyrogovernance">GitHub</ActionButton>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
}
