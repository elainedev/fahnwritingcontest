import { FilkType } from "../types/type";
import { useState, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import "./Cassette.scss";
import { RibbonAward } from "./Award";

export const Cassette = ({ filk }: { filk: FilkType }) => {
  const [isFacingFront, setIsFacingFront] = useState(true);

  const handleFlipClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsFacingFront(!isFacingFront);
    event?.stopPropagation();
  };

  const adjustTitleFont = (version?: string): CSSProperties | undefined => {
    if (version === "original") {
      if (filk.originalSongTitle.length > 25) {
        return { fontSize: 19.5, position: "relative", top: 2 };
      } else if (filk.originalSongTitle.length > 20) {
        return { fontSize: 23 };
      }
    } else if (version === "farmer" && filk.title.length > 18) {
      return { fontSize: 21.5, bottom: 3, position: "relative" };
    }
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/irishfarmerhits/${filk.id}`);
  };

  return (
    <div
      className={`cassette ${isFacingFront ? "facing-front" : "facing-back"}`}
      onClick={handleNavigate}
    >
      <div className="side back">
        <div className="top-label back-label">
          <img
            width={44}
            src="Universal-Music.png"
            className="universal-logo"
          />
          <span className="title" style={adjustTitleFont("original")}>
            {filk.originalSongTitle}
          </span>
        </div>

        <div className="bottom-label">{filk.originalArtist}</div>
        <img
          src="flip-icon.png"
          width={43}
          className="flip-icon"
          onClick={handleFlipClick}
        />
      </div>

      <div className="side left"></div>
      <div className="side right"></div>
      <div className="side top"></div>
      <div className="side bottom"></div>
      <div className="side front">
        <div className="top-label">
          <div className="round-sticker">
            <img width={24} height={24} src="plough.png" />
          </div>
          <span className="title" style={adjustTitleFont("farmer")}>
            {filk.title}
          </span>
        </div>
        <div className="bottom-label">Michail O’Flaithbheartaigh O'Conaill</div>
        <img
          src="flip-icon.png"
          width={43}
          className="flip-icon"
          onClick={handleFlipClick}
        />
        {filk.place && <RibbonAward version="cassette" place={filk.place} />}
      </div>
    </div>
  );
};
