import { HeroSection } from "./sections/HeroSection";
import { ShortcutsSection } from "./sections/ShortcutsSection";
import { CredentialsSection } from "./sections/CredentialsSection";
import { GithubSection } from "./sections/GithubSection";
import { GyroSection } from "./sections/GyroSection";
import { SmartBitesSection } from "./sections/SmartBitesSection";
import { DatasetsSection } from "./sections/DatasetsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { ResearchSection } from "./sections/ResearchSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { VideosSection } from "./sections/VideosSection";
import { MusicSection } from "./sections/MusicSection";
import { CollectionsSection } from "./sections/CollectionsSection";
import { SocialSection } from "./sections/SocialSection";
import { ResponsiveImage } from "./components/ResponsiveImage";
import { useReveal } from "./components/useReveal";
import { useEffect, useState } from "react";

function TopBar() {
  const [ref, isVisible] = useReveal();

  return (
    <header ref={ref} className={`topbar ${isVisible ? "is-visible" : ""}`}>
      <a className="topbar__avatar-link" href="/" aria-label="Home">
        <ResponsiveImage image="/assets/images/cmd-4-150x150.png" className="topbar__avatar" alt="" aria-hidden="true" />
      </a>
      <a className="topbar__title" href="/">
        Basil Korompilias
      </a>
      <a className="topbar__avatar-link" href="mailto:basilkorompilias@gmail.com" aria-label="Email Basil">
        <ResponsiveImage image="/assets/images/messenger-1-150x150.png" className="topbar__avatar" alt="" aria-hidden="true" />
      </a>
    </header>
  );
}

function Footer() {
  const [ref, isVisible] = useReveal();

  return (
    <footer ref={ref} className={`footer ${isVisible ? "is-visible" : ""}`}>
      BASIL KOROMPILIAS | 2026 | MADE IN GREECE
    </footer>
  );
}

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.6);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a className={`scroll-top ${isVisible ? "visible" : ""}`} href="#content" aria-label="Scroll to top">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 12V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4.5 7.5 8 4l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function App() {
  return (
    <div className="site-shell">
      <TopBar />

      <main className="page" id="content">
        <HeroSection />
        <CredentialsSection />
        <ShortcutsSection />
        <GithubSection />
        <GyroSection />
        <SmartBitesSection />
        <DatasetsSection />
        <NewsletterSection />
        <ResearchSection />
        <PortfolioSection />
        <VideosSection />
        <MusicSection />
        <CollectionsSection />
        <SocialSection />
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
