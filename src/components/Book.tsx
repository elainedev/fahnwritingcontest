import { PoemOrStoryType } from "../types/type";
import { useNavigate } from "react-router-dom";
import { RibbonAward } from "./Award";
import "./Book.scss";

export const Book = ({
  entry,
  category,
  additionalItemStyle,
}: {
  entry: PoemOrStoryType;
  category: "story" | "poem";
  additionalItemStyle?: string;
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/${category === "story" ? "stories" : "poems"}/${entry.id}`);
  };

  return (
    <div
      className={`book-item ${category} ${additionalItemStyle} `}
      onClick={handleNavigate}
    >
      <div className="side back"></div>

      <div className="side left"></div>
      <div className="side right"></div>
      <div className="side top"></div>
      <div className="side bottom"></div>
      <div className="side front">
        <h3 className="title">{entry.title}</h3>
        {entry.place && (
          <RibbonAward version="book" place={entry.place} category={category} />
        )}
      </div>
    </div>
  );
};
