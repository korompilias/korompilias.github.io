import { portfolioTiles } from "../content/siteContent";
import { ActionButton } from "../components/ActionButton";
import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";

const portfolioHref = "https://www.figma.com/design/4ncIEiSREvMVYvaVPnYLxC/Basil-Korompilias---Product-Portfolio?node-id=0-1&p=f";

export function PortfolioSection() {
  return (
    <SectionFrame
      id="portfolio"
      icon="/assets/images/web-design-150x150.png"
      title="Product Portfolio"
      action={<ActionButton href={portfolioHref}>View Portfolio</ActionButton>}
    >
      <div className="portfolio-grid">
        {portfolioTiles.map((tile) => (
          <ExternalLinkCard key={tile.id} className="inner-block portfolio-card" href={portfolioHref} ariaLabel={tile.title}>
            <ResponsiveImage image={tile.image} alt={tile.alt} />
          </ExternalLinkCard>
        ))}
      </div>
    </SectionFrame>
  );
}
