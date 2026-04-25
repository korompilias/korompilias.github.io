import { researchPapers } from "../content/siteContent";
import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";

export function ResearchSection() {
  return (
    <SectionFrame
      id="research"
      className="research-section"
      icon="/assets/images/light-bulb-64x64.webp"
      title="Research Papers"
    >
      <div className="research-stack">
        {researchPapers.map((paper) => (
          <ExternalLinkCard
            key={paper.id}
            className={`inner-block research-card ${paper.tone}`}
            href={paper.href}
          >
            {paper.image ? (
              <div className="research-card__media">
                <ResponsiveImage image={paper.image} alt={paper.alt ?? ""} />
              </div>
            ) : (
              <div className="research-card__media research-card__media--fallback">
                <div className="research-card__cover-fallback" aria-hidden="true">
                  <span className="research-card__cover-mark">{paper.icon}</span>
                  <div className="research-card__cover-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="research-card__cover-footer">
                    <span className="research-card__cover-chip">AI Safety</span>
                    <span className="research-card__cover-chip">Taxonomy</span>
                  </div>
                </div>
              </div>
            )}
            <div>
              <h3>{paper.title}</h3>
              <p>{paper.body}</p>
            </div>
          </ExternalLinkCard>
        ))}
      </div>
    </SectionFrame>
  );
}
