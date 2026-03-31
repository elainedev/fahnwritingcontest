import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { filksData } from "./fillks/filksData";
import { FilkType } from "./types/type";
import {
  getSocialPlatformName,
  SocialPlatformType,
} from "./utils/SocialPlatformName";
import { getRandomNumber } from "./utils/Randomizer";
import "./Menu.scss";
import "./Entry.scss";
import "./Filks.scss";
import { Cassette } from "./components/Cassette";
import { WinnerTag, RibbonAward } from "./components/Award";

export default function Filks() {
  const [filkMenuType, setFilkMenuType] = useState(
    () => localStorage.getItem("filkMenuType") || "cassettes-menu"
  );

  useEffect(() => {
    localStorage.setItem("filkMenuType", filkMenuType);
  }, [filkMenuType]);

  return (
    <>
      <h2 className="less-h2-margin">Irish Farmer Hits</h2>

      <nav className="menu">
        <Link
          to={`${getRandomNumber(filksData.length)}`}
          className="randomizer-link"
        >
          Click this link to start reading a random song from the list
        </Link>
        <p className="select-instruction">Or select a song from below:</p>
        <div className="menu-selection-container">
          <section
            onClick={() => setFilkMenuType("list")}
            className={filkMenuType === "list" ? "active filk" : ""}
          >
            <span className="menu-type-text">List View</span>
            <img src="icons/buttonListIcon.png" width={20} />
          </section>
          |
          <section
            onClick={() => setFilkMenuType("cassettes-menu")}
            className={filkMenuType === "cassettes-menu" ? "active filk" : ""}
          >
            <img src="icons/cassetteIcon.png" width={20} />
            <span className="menu-type-text">Cassettes View</span>
          </section>
        </div>

        {filkMenuType === "list" &&
          filksData.map((filk: FilkType) => (
            <FilkButton key={filk.id} filk={filk} />
          ))}
        {filkMenuType === "cassettes-menu" && (
          <>
            <p className="cassette-instruction">
              Click on the brown "flip"{" "}
              <img
                src="flip-icon.png"
                className="flip-instruction-icon"
                width={20}
              />{" "}
              icon to flip the cassette tape. Click anywhere else on the
              cassette to view the song.
            </p>
            <div className="cassettes-container">
              {filksData.map((filk: FilkType) => (
                <Cassette key={filk.id} filk={filk} />
              ))}
            </div>
          </>
        )}
      </nav>
    </>
  );
}

function FilkButton({ filk }: { filk: FilkType }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/irishfarmerhits/${filk.id}`);
  };

  return (
    <button className="filks" onClick={handleNavigate}>
      {filk.title}
      <div className="author-in-menu">{filk.penname || filk.author}</div>
      {filk.place && <RibbonAward version="regular" place={filk.place} />}
    </button>
  );
}

function Filk() {
  const { id } = useParams();
  const filkId: number = Number(id);
  const filk = filksData.find((filk) => filk.id === filkId);

  window.scrollTo(0, 0);
  console.log("show vid", filk?.videoPath);

  return (
    <div className="left-align">
      {filk ? (
        <>
          {filk.place && (
            <WinnerTag place={filk.place} category="Irish Farmer Hit" />
          )}
          <p>
            <strong>{filk.originalArtist}</strong> stole this song and turned it
            into <strong>"{filk.originalSongTitle}"</strong>
            {filk.timestamps && ` (${filk.timestamps})`}:
          </p>
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/${filk.originalSongUrl}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <hr />
          <p className="maxwidth">
            {`But it was actually originally written by none other than humble
            Irish Farmer Micheal O'Flaithbheartaigh O'Conaill himself${
              filk.context ? ", with the following explanation: " : "."
            }`}
          </p>
          {filk.context && <p className="context maxwidth">{filk.context}</p>}
          {(filk.hasAudio || filk.hasVideo || filk.hasVideoOnYT) && (
            <p>Here is the original performance:</p>
          )}

          {filk.hasAudio && (
            <AudioPlayer audioPath={`/audios/${filk.audioPath}`} />
          )}
          {filk.hasVideo && (
            <VideoPlayer
              videoPath={`/videos/${filk.videoPath}`}
              key={`${filk.videoPath}`}
            />
          )}
          {filk.hasVideoOnYT && (
            <div className="video-responsive">
              <iframe
                src={`https://www.youtube.com/embed/${filk.ytVideoUrl}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <h2 className="entry-title">{filk.title}</h2>

          <div className="format">{filk.content}</div>
          <div className="byline left-align author-info filk">
            <i>Written by</i>
            <span className="author-name">{filk.penname || filk.author}</span>
          </div>
          {filk.social &&
            Object.keys(filk.social).map((platform) => (
              <div className="left-align author-info filk">
                <i>{getSocialPlatformName(platform as SocialPlatformType)}:</i>{" "}
                {filk.social && filk.social[platform as SocialPlatformType]}
              </div>
            ))}
          <div className="entries-nav maxwidth">
            <Link to={`/irishfarmerhits`}>Back to All Songs</Link>
            {filkId < filksData.length && (
              <Link to={`/irishfarmerhits/${filkId + 1}`}>Next Song</Link>
            )}
            {filkId === filksData.length && (
              <Link to="/irishfarmerhits/1">Go to First Song</Link>
            )}
          </div>
        </>
      ) : (
        <p>Song not found</p>
      )}
    </div>
  );
}

function AudioPlayer({ audioPath }: { audioPath?: string }) {
  return (
    <div>
      <audio controls>
        <source src={audioPath} type="audio/mp3" />
        <p className="error-msg">
          Your browser does not support the audio element.
        </p>
      </audio>
    </div>
  );
}

function VideoPlayer({ videoPath }: { videoPath: string }) {
  console.log("Video Path:", videoPath);

  return (
    <div className="video-wrapper">
      <video className="video-player" controls>
        <source src={videoPath} type="video/mp4" />
        <p className="error-msg">Your browser does not support video.</p>
      </video>
    </div>
  );
}

export { Filk };
