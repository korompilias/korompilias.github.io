import { profileHighlights } from "../content/siteContent";
import { SectionFrame } from "../components/SectionFrame";

export function CredentialsSection() {
  return (
    <SectionFrame title="Professional Snapshot">
      <div className="credentials-panel">
        <div className="credentials-block inner-block">
          <span className="credentials-block__eyebrow">Current Roles</span>
          <div className="credentials-chip-list">
            {profileHighlights.roles.map((item) => (
              <span key={item} className="credentials-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="credentials-block inner-block">
          <span className="credentials-block__eyebrow">Location & Focus</span>
          <div className="credentials-chip-list">
            {profileHighlights.meta.map((item) => (
              <span key={item} className="credentials-chip credentials-chip--soft">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="credentials-grid">
          <div className="credentials-card inner-block">
            <span className="credentials-block__eyebrow">Education</span>
            {profileHighlights.education.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="credentials-card inner-block">
            <span className="credentials-block__eyebrow">Selected Affiliations</span>
            {profileHighlights.affiliations.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
