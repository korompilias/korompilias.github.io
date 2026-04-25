import { ActionButton } from "../components/ActionButton";
import { LiquidGlassCard } from "../components/LiquidGlassCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { useReveal } from "../components/useReveal";

export function HeroSection() {
  const [ref, isVisible] = useReveal();

  return (
    <div ref={ref} className={isVisible ? "is-visible" : ""}>
      <LiquidGlassCard className="outer-card--hero">
        <div className="hero-shell">
          <div className="hero-shell__photo" aria-hidden="true">
            <ResponsiveImage
              image={{
                src: "/assets/images/1708762919806-300x300.webp",
                srcSet:
                  "/assets/images/1708762919806-300x300.webp 300w, /assets/images/1708762919806-600x600.webp 600w",
                sizes: "(max-width: 760px) calc(100vw - 44px), 262px",
              }}
              alt=""
              className="hero-shell__photo-image"
              width={262}
              height={262}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero-shell__copy">
            <h1>👋 Hello there, I'm Basil.</h1>
            <p className="lead">
              AI Research Scientist & Engineer - Safety, Governance, Adoption.
            </p>
            <p>
              Over two decades of multidisciplinary experience in AI alignment research, model evaluation, and governance
              systems. I build verifiable safety tools and alignment architectures grounded in mathematical physics.
            </p>
            <div className="hero-shell__actions">
              <ActionButton href="https://www.linkedin.com/in/korompilias/">LinkedIn Bio</ActionButton>
              <ActionButton href="https://scholar.google.com/citations?hl=en&user=29gbSqUAAAAJ">
                Google Scholar
              </ActionButton>
            </div>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
}
