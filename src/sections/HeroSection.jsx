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
                src: "/assets/images/1708762919806-768x768.jpg",
                webpSrcSet:
                  "/assets/images/1708762919806-768x768.webp 768w, /assets/images/1708762919806-scaled.webp 2048w",
                srcSet:
                  "/assets/images/1708762919806-768x768.jpg 768w, /assets/images/1708762919806-scaled.jpg 2048w",
                sizes: "(max-width: 760px) 100vw, 40vw",
              }}
              alt=""
              className="hero-shell__photo-image"
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
            </div>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
}
