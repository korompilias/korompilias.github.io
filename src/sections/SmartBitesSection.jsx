import { ActionButton } from "../components/ActionButton";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";

export function SmartBitesSection() {
  return (
    <SectionFrame>
      <div className="feature-split">
        <div className="feature-split__media inner-block">
          <ResponsiveImage
            image={{
              src: "/assets/images/638919d9-c2dd-4767-85b1-3e84160bf256-1024x1024.jpg",
              webpSrcSet: "/assets/images/638919d9-c2dd-4767-85b1-3e84160bf256-1024x1024.webp 1024w",
              sizes: "(max-width: 760px) 100vw, 40vw",
            }}
            alt="Smart Bites poster."
            className="feature-split__poster"
          />
        </div>
        <div className="feature-split__copy inner-block">
          <h2>GenAI Prompt Engineering for AI-Empowered Governance & Change Management</h2>
          <p>Smart Bites aims to Democratize Change Management, Making it Accessible to People from All Walks of Life.</p>
          <p>I've developed a Formal Process for AI-Augmented Governance, enabling Decentralized Decision-Making and Data-empowered Insights.</p>
          <p>Open and serving Free Bite-sized AI Guides at smartbites.github.io.</p>
          <div className="feature-split__actions">
            <ActionButton href="https://smartbites.github.io/">Open Site</ActionButton>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
