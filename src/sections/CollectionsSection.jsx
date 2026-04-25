import { ExternalLinkCard } from "../components/ExternalLinkCard";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";
import { SocialIcon } from "../components/SocialIcon";

export function CollectionsSection() {
  return (
    <SectionFrame id="art" icon="/assets/images/favourites-150x150.png" title="Various Collections">
      <div className="collection-grid">
        <ExternalLinkCard
          className="inner-block pill-row collections-section__profile"
          href="https://www.pinterest.com/basilkor/"
          aria-label="Open Basil Korompilias Pinterest profile"
        >
          <span className="pill-row__icon collections-section__icon" aria-hidden="true">
            <SocialIcon type="pinterest" />
          </span>
          <span>Pinterest Profile</span>
        </ExternalLinkCard>
        <ExternalLinkCard
          className="inner-block pill-row"
          href="https://www.pinterest.com/basilkor/physiology-fusion/"
        >
          <ResponsiveImage image="/assets/images/126fc23cf0499610d1df1cdfb0351770-300x300.jpg" alt="" />
          <span>Physiology Fusion</span>
        </ExternalLinkCard>
        <ExternalLinkCard
          className="inner-block pill-row"
          href="https://www.pinterest.com/basilkor/phenomenology-fusion/"
        >
          <ResponsiveImage image="/assets/images/ac1cbb45566f6369e0c828d9864c4ddd-231x300.jpg" alt="" />
          <span>Phenomenology Fusion</span>
        </ExternalLinkCard>
      </div>
    </SectionFrame>
  );
}
