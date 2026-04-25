import { githubLinks } from "../content/siteContent";
import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { SectionFrame } from "../components/SectionFrame";

export function GithubSection() {
  return (
    <SectionFrame title="GitHub Repositories">
      <div className="repo-grid">
        {githubLinks.map((item) => (
          <ExternalLinkCard key={item.id} className="inner-block repo-card" href={item.href}>
            {item.icon.startsWith("/") ? (
              <img src={item.icon} alt="" aria-hidden="true" />
            ) : (
              <span className="repo-card__icon" aria-hidden="true">
                {item.icon}
              </span>
            )}
            <span className="repo-card__text">
              <span className="repo-card__title">{item.title}</span>
              {item.subtitle && <span className="repo-card__subtitle">{item.subtitle}</span>}
            </span>
          </ExternalLinkCard>
        ))}
      </div>
    </SectionFrame>
  );
}
