import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { storiesData } from "./short-stories/storiesData";
import { PoemOrStoryType } from "./types/type";
import { getRandomNumber } from "./utils/Randomizer";
import {
  getSocialPlatformName,
  SocialPlatformType,
} from "./utils/SocialPlatformName";
import DOMPurify from "dompurify";
import { Book } from "./components/Book";
import { WinnerTag, RibbonAward } from "./components/Award";
import "./Menu.scss";
import "./Entry.scss";

export default function ShortStories() {
  const [storyMenuType, setStoryMenuType] = useState(
    () => localStorage.getItem("storyMenuType") || "books-menu"
  );

  useEffect(() => {
    localStorage.setItem("storyMenuType", storyMenuType);
  }, [storyMenuType]);
  return (
    <>
      <h2 className="less-h2-margin">Short Stories</h2>
      <nav className="menu">
        <Link
          to={`${getRandomNumber(storiesData.length)}`}
          className="randomizer-link"
        >
          Click this link to start reading a random story from the list
        </Link>
        <p className="select-instruction">Or select a story from below:</p>
        <div className="menu-selection-container">
          <section
            onClick={() => setStoryMenuType("list")}
            className={storyMenuType === "list" ? "active story" : ""}
          >
            <span className="menu-type-text">List View</span>
            <img src="icons/buttonListIcon.png" width={20} />
          </section>
          |
          <section
            onClick={() => setStoryMenuType("books-menu")}
            className={storyMenuType === "books-menu" ? "active story" : ""}
          >
            <img src="icons/bookStackIcon.png" width={20} />
            <span className="menu-type-text">Books View</span>
          </section>
        </div>
        {storyMenuType === "list" &&
          storiesData.map((story: PoemOrStoryType) => (
            <StoryButton key={story.id} story={story} />
          ))}
        {storyMenuType === "books-menu" && (
          <div className="books-container">
            {storiesData.map((story: PoemOrStoryType) => (
              <Book
                key={story.id}
                entry={story}
                category="story"
                additionalItemStyle={`story-${story.id}`}
              />
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function StoryButton({ story }: { story: PoemOrStoryType }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/stories/${story.id}`);
  };

  return (
    <button className="shorts" onClick={handleNavigate}>
      {story.title}
      <div className="author-in-menu">{story.penname || story.author}</div>
      {story.place && <RibbonAward version="regular" place={story.place} />}
    </button>
  );
}

function ShortStory() {
  const { id } = useParams();
  const storyId: number = Number(id);
  const story = storiesData.find(
    (story: PoemOrStoryType) => story.id === storyId
  );

  window.scrollTo(0, 0);

  return (
    <div className="max-story-width">
      {story ? (
        <>
          {story.place && (
            <WinnerTag place={story.place} category="Short Story" />
          )}
          {story.context && <p className="context">{story.context}</p>}
          <h2 className="entry-title">{story.title}</h2>
          <div className="byline left-align author-info">
            <i>Written by</i>
            <span className="author-name">{story.penname || story.author}</span>
          </div>
          {story.social &&
            Object.keys(story.social).map((platform) => (
              <div className="left-align author-info">
                <i>{getSocialPlatformName(platform as SocialPlatformType)}:</i>{" "}
                {story.social && story.social[platform as SocialPlatformType]}
              </div>
            ))}
          {story.hasFormatting ? (
            <div
              className="format"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(story.content),
              }}
            />
          ) : (
            <div className="format">{story.content}</div>
          )}
          <div className="entries-nav">
            <Link to={`/stories`}>Back to All Short Stories</Link>
            {storyId < storiesData.length && (
              <Link to={`/stories/${storyId + 1}`}>Next Story</Link>
            )}
            {storyId === storiesData.length && (
              <Link to="/stories/1">Go to First Story</Link>
            )}
          </div>
        </>
      ) : (
        <p>Story not found</p>
      )}
    </div>
  );
}

export { ShortStory };
