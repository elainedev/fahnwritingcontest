import "./Award.scss";

export const RibbonAward = ({
  version,
  place,
  category,
}: {
  version: "book" | "cassette" | "regular";
  place: 1 | 2;
  category?: "story" | "poem";
}) => {
  return (
    <img
      className={`award award-${version} ${
        category ? category : ""
      } coloring-${place}`}
      src={place === 1 ? "icons/ribbon-blue.png" : "icons/ribbon-red.png"}
    />
  );
};

export const WinnerTag = ({
  place,
  category,
}: {
  place: 1 | 2;
  category: "Short Story" | "Poetry" | "Irish Farmer Hit";
}) => {
  return (
    <div className={`winner-tag coloring-${place}`}>{`${category}: ${
      place === 1 ? "Crowd Favourite" : "Also Awesome"
    } Winner!`}</div>
  );
};
