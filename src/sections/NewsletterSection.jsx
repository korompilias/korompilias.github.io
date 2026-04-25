import { newsletterPosts } from "../content/siteContent";
import { ActionButton } from "../components/ActionButton";
import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";

export function NewsletterSection() {
  return (
    <SectionFrame
      title="My LinkedIn Newsletter | The Walk"
      action={
        <ActionButton href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7115036597602967553">
          Free Subscription
        </ActionButton>
      }
    >
      <div className="inner-block newsletter-stack">
        {newsletterPosts.map((post) => (
          <ExternalLinkCard key={post.id} className="inner-block horizontal-card newsletter-card" href={post.href}>
            <div className="newsletter-card__media">
              <ResponsiveImage image={post.image} alt={post.alt ?? ""} />
            </div>
            <div className="newsletter-card__content">
              <h3>{post.title}</h3>
            </div>
          </ExternalLinkCard>
        ))}
      </div>
    </SectionFrame>
  );
}
