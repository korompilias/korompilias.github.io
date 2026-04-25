import { portfolioTiles } from "../content/siteContent";
import { ActionButton } from "../components/ActionButton";
import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";

const portfolioHref = "https://www.notion.so/korompilias/Portfolio-b5f6143a8c6042ef8dd2a42c16174403";

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
