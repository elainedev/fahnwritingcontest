import { useNavigate } from "react-router-dom";
import "./Menu.scss";

function Menu() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <p>
        An unofficial writing event for fans of
        <br />
        <b>~ Foil Arms and Hog ~</b>
      </p>
      <nav className="menu main">
        <button onClick={() => handleNavigate("/guidelines")}>
          Guidelines
        </button>

        {/* <button onClick={() => handleNavigate("/submit")}>
          Submit an Entry
        </button> */}

        <button className="shorts" onClick={() => handleNavigate("/stories")}>
          Short Stories
        </button>

        <button className="poems" onClick={() => handleNavigate("/poems")}>
          Poems
        </button>

        <button
          className="filks"
          onClick={() => handleNavigate("/irishfarmerhits")}
        >
          Irish Farmer Hits
        </button>
      </nav>

      <div className="addendum">
        <p className="lesspmargin">
          Instagram:{" "}
          <a href="https://www.instagram.com/fahnwritingcontest/">
            @fahnwritingcontest
          </a>
        </p>
        <p className="lesspmargin">
          Note: this event is made by fans. It is not officially affiliated with
          Foil Arms and Hog.
        </p>
      </div>
    </>
  );
}

export default Menu;
