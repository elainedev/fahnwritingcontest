import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { poemsData } from "./poems/poemsData";
import { PoemOrStoryType } from "./types/type";
import { getRandomNumber } from "./utils/Randomizer";
import { Book } from "./components/Book";
import { WinnerTag, RibbonAward } from "./components/Award";
import "./Menu.scss";
import "./Entry.scss";
import {
  SocialPlatformType,
  getSocialPlatformName,
} from "./utils/SocialPlatformName";

export default function Poems() {
  const [poemMenuType, setPoemMenuType] = useState(
    () => localStorage.getItem("poemMenuType") || "books-menu"
  );

  useEffect(() => {
    localStorage.setItem("poemMenuType", poemMenuType);
  }, [poemMenuType]);

  return (
    <>
      <h2 className="less-h2-margin">Poems</h2>
      <nav className="menu">
        <Link
          to={`${getRandomNumber(poemsData.length)}`}
          className="randomizer-link"
        >
          Click this link to start reading a random poem from the list
        </Link>
        <p className="select-instruction">Or select a poem from below:</p>
        <div className="menu-selection-container">
          <section
            onClick={() => setPoemMenuType("list")}
            className={poemMenuType === "list" ? "active poem" : ""}
          >
            <span className="menu-type-text">List View</span>
            <img src="icons/buttonListIcon.png" width={20} />
          </section>
          |
          <section
            onClick={() => setPoemMenuType("books-menu")}
            className={poemMenuType === "books-menu" ? "active poem" : ""}
          >
            <img src="icons/bookStackIcon.png" width={20} />
            <span className="menu-type-text">Books View</span>
          </section>
        </div>
        {poemMenuType === "list" &&
          poemsData.map((poem: PoemOrStoryType) => (
            <PoemButton key={poem.id} poem={poem} />
          ))}
        {poemMenuType === "books-menu" && (
          <div className="books-container">
            {poemsData.map((poem: PoemOrStoryType) => (
              <Book
                key={poem.id}
                entry={poem}
                category="poem"
                additionalItemStyle={`poem-${poem.id}`}
              />
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function PoemButton({ poem }: { poem: PoemOrStoryType }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/poems/${poem.id}`);
  };

  return (
    <button className="poems" onClick={handleNavigate}>
      {poem.title}
      <div className="author-in-menu">{poem.penname || poem.author}</div>
      {poem.place && <RibbonAward version="regular" place={poem.place} />}
    </button>
  );
}

function Poem() {
  const { id } = useParams();
  const poemId: number = Number(id);
  const poem = poemsData.find((poem) => poem.id === poemId);
  window.scrollTo(0, 0);

  return (
    <div className="left-align maxwidth">
      {poem ? (
        <>
          {poem.place && <WinnerTag place={poem.place} category="Poetry" />}
          {poem.context && <p className="context">{poem.context}</p>}
          <h2 className="entry-title maxwidth">{poem.title}</h2>
          <div className="byline left-align author-info">
            <i>Written by</i>
            <span className="author-name">{poem.penname || poem.author}</span>
          </div>
          {poem.social &&
            Object.keys(poem.social).map((platform) => (
              <div className="left-align author-info">
                <i>{getSocialPlatformName(platform as SocialPlatformType)}:</i>{" "}
                {poem.social && poem.social[platform as SocialPlatformType]}
              </div>
            ))}

          <div className="format">{poem.content}</div>

          <div className="entries-nav maxwidth">
            <Link to={`/poems`}>Back to All Poems</Link>
            {poemId < poemsData.length && (
              <Link to={`/poems/${poemId + 1}`}>Next Poem</Link>
            )}
            {poemId === poemsData.length && (
              <Link to="/poems/1">Go to First Poem</Link>
            )}
          </div>
        </>
      ) : (
        <p>Poem not found</p>
      )}
    </div>
  );
}

export { Poem };
