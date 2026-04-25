import { HeroSection } from "./sections/HeroSection";
import { ShortcutsSection } from "./sections/ShortcutsSection";
import { CredentialsSection } from "./sections/CredentialsSection";
import { GithubSection } from "./sections/GithubSection";
import { GyroSection } from "./sections/GyroSection";
import { SmartBitesSection } from "./sections/SmartBitesSection";
import { DatasetsSection } from "./sections/DatasetsSection";
import { ResponsiveImage } from "./components/ResponsiveImage";
import { useReveal } from "./components/useReveal";
import { lazy, Suspense, useEffect, useState } from "react";

const NewsletterSection = lazy(() => import("./sections/NewsletterSection").then((module) => ({ default: module.NewsletterSection })));
const ResearchSection = lazy(() => import("./sections/ResearchSection").then((module) => ({ default: module.ResearchSection })));
const PortfolioSection = lazy(() => import("./sections/PortfolioSection").then((module) => ({ default: module.PortfolioSection })));
const VideosSection = lazy(() => import("./sections/VideosSection").then((module) => ({ default: module.VideosSection })));
const MusicSection = lazy(() => import("./sections/MusicSection").then((module) => ({ default: module.MusicSection })));
const CollectionsSection = lazy(() => import("./sections/CollectionsSection").then((module) => ({ default: module.CollectionsSection })));
const SocialSection = lazy(() => import("./sections/SocialSection").then((module) => ({ default: module.SocialSection })));

function DeferredSectionFallback() {
  return <div className="outer-card" aria-hidden="true" style={{ minHeight: 160 }} />;
}

function TopBar() {
  const [ref, isVisible] = useReveal();

  return (
    <header ref={ref} className={`topbar ${isVisible ? "is-visible" : ""}`}>
      <a className="topbar__avatar-link" href="/" aria-label="Home">
        <ResponsiveImage
          image="/assets/images/cmd-4-48x48.png"
          className="topbar__avatar"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
        />
      </a>
      <a className="topbar__title" href="/">
        Basil Korompilias
      </a>
      <a className="topbar__avatar-link" href="mailto:basilkorompilias@gmail.com" aria-label="Email Basil">
        <ResponsiveImage
          image="/assets/images/messenger-1-48x48.png"
          className="topbar__avatar"
          alt=""
          aria-hidden="true"
          loading="eager"
        />
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
        <Suspense fallback={<DeferredSectionFallback />}>
          <NewsletterSection />
        </Suspense>
        <Suspense fallback={<DeferredSectionFallback />}>
          <ResearchSection />
        </Suspense>
        <Suspense fallback={<DeferredSectionFallback />}>
          <PortfolioSection />
        </Suspense>
        <Suspense fallback={<DeferredSectionFallback />}>
          <VideosSection />
        </Suspense>
        <Suspense fallback={<DeferredSectionFallback />}>
          <MusicSection />
        </Suspense>
        <Suspense fallback={<DeferredSectionFallback />}>
          <CollectionsSection />
        </Suspense>
        <Suspense fallback={<DeferredSectionFallback />}>
          <SocialSection />
        </Suspense>
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
