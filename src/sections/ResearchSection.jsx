import { researchPapers } from "../content/siteContent";
import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";
import { SocialIcon } from "../components/SocialIcon";

export function ResearchSection() {
  return (
    <SectionFrame
      id="research"
      className="research-section"
      icon="/assets/images/light-bulb-150x150.png"
      title="Research Papers"
      action={
        <a
          className="research-section__scholar"
          href="https://scholar.google.com/citations?hl=en&user=29gbSqUAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="research-section__scholar-icon" aria-hidden="true">
            <SocialIcon type="scholar" />
          </span>
          Google Scholar
        </a>
      }
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
