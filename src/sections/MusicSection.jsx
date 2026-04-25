import { useState } from "react";
import { playlists } from "../content/siteContent";
import { ActionButton } from "../components/ActionButton";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionFrame } from "../components/SectionFrame";

const spotifyProfileHref = "https://open.spotify.com/user/11121209054";

export function MusicSection() {
  const [showPlaylists, setShowPlaylists] = useState(false);

  return (
    <SectionFrame id="music" icon="/assets/images/music-note-150x150.png" title="Music Collections">
      <div className="music-profile inner-block">
        <a href={spotifyProfileHref} target="_blank" rel="noopener noreferrer" aria-label="Open Spotify profile">
          <ResponsiveImage
            image={{
              src: "/assets/images/1708763285884-768x768.jpg",
              webpSrcSet:
                "/assets/images/1708763285884-768x768.webp 768w, /assets/images/1708763285884-1024x1024.webp 1024w, /assets/images/1708763285884-1536x1536.webp 1536w, /assets/images/1708763285884.webp 2048w",
              srcSet:
                "/assets/images/1708763285884-768x768.jpg 768w, /assets/images/1708763285884-1024x1024.jpg 1024w, /assets/images/1708763285884-1536x1536.jpg 1536w, /assets/images/1708763285884.jpg 2048w",
              sizes: "88px",
            }}
            alt=""
            className="music-profile__avatar"
          />
        </a>
        <div className="music-profile__content">
          <p>
            From Easy vibes for anytime to House bangers for the gym, and from Classical pieces to Disney, my Spotify
            Playlists have something for all occasions.
          </p>
          <div className="music-profile__actions">
            <button
              type="button"
              className="action-button action-button--toggle"
              onClick={() => setShowPlaylists((value) => !value)}
            >
              <span className="action-button__label">{showPlaylists ? "Hide Playlists" : "Show Playlists"}</span>
              <span className="action-button__icon" aria-hidden="true">
                {showPlaylists ? (
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M4 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      {showPlaylists ? (
        <div className="playlist-grid">
          {playlists.map((playlist) => (
            <iframe
              key={playlist.id}
              className="playlist-frame"
              src={playlist.embed}
              title={playlist.title}
              width="100%"
              height="456"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}
    </SectionFrame>
  );
}
