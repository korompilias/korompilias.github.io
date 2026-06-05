import { ActionButton } from "../components/ActionButton";
import { LiquidGlassCard } from "../components/LiquidGlassCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { useReveal } from "../components/useReveal";

export function TravelSection() {
  const [ref, isVisible] = useReveal();

  return (
    <div ref={ref} className={isVisible ? "is-visible" : ""}>
      <LiquidGlassCard className="feature-card feature-card--travel">
        <div className="feature-banner feature-banner--travel">
          <div className="feature-banner__logo-wrap">
            <ResponsiveImage
              image={{
                src: "/assets/images/GG_Travel_Logo.png",
              }}
              className="feature-banner__logo"
              alt="Ethical Travel logo"
              width={92}
              height={92}
            />
          </div>
          <h2>Ethical Travel</h2>
          <p>AI-Empowered Guides for Sustainable Tourism and Humane Adventures</p>
          <div className="feature-banner__actions">
            <ActionButton href="https://travel.gyrogovernance.com/">Website</ActionButton>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
}
