import { quickLinks } from "../content/siteContent";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";

export function ShortcutsSection() {
  return (
    <SectionFrame>
      <nav className="shortcut-grid" aria-label="Quick links">
        {quickLinks.map((item) => (
          <a key={item.id} className="inner-block shortcut-card" href={`#${item.id}`}>
            <ResponsiveImage image={item.icon} alt="" aria-hidden="true" width={24} height={24} />
            <span>{item.title}</span>
          </a>
        ))}
      </nav>
    </SectionFrame>
  );
}
