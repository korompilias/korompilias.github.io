import { videos } from "../content/siteContent";
import { SectionFrame } from "../components/SectionFrame";

export function VideosSection() {
  return (
    <SectionFrame id="video" icon="/assets/images/online-video-64x64.webp" title="Video Production">
      <div className="video-grid">
        {videos.map((video) => (
          <article key={video.id} className="inner-block video-card">
            <div className="video-card__meta">
              <h3>{video.title}</h3>
              <span>{video.subtitle}</span>
            </div>
            <iframe
              className="video-card__frame"
              width="560"
              height="315"
              src={video.embed}
              title="YouTube video player"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
