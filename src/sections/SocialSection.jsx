import { SocialIcon } from "../components/SocialIcon";
import { socialLinks } from "../content/siteContent";
import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { SectionFrame } from "../components/SectionFrame";

export function SocialSection() {
  return (
    <SectionFrame id="social" icon="/assets/images/good-review-64x64.webp" title="Social Profiles">
      <div className="social-row">
        {socialLinks.map((link) => (
          <ExternalLinkCard key={link.id} className="social-chip" href={link.href} ariaLabel={link.name}>
            <SocialIcon type={link.icon} />
          </ExternalLinkCard>
        ))}
      </div>
    </SectionFrame>
  );
}
