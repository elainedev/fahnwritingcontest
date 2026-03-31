import "./Cassette.scss";

export const Cassette = () => {
  // const smallerTitle = (title: string) => {
  //   if (title.length > 18) return { fontSize: 40 };
  // };

  return (
    <div className="cassette">
      <div className="side back">
        <div className="top-label back-label">
          <img
            width={80}
            // style={{ marginInlineEnd: 5 }}
            src="Universal-Music.png"
            className="universal-logo"
          />
          {/* <span className="title" style={{ fontSize: 43 }}>
            Murder on the Dancefloor
          </span> */}
          {/* <span className="title" style={{ fontSize: 35 }}>
            Take Me Home, Country Roads
          </span> */}
          <span className="title">The Real Slim Shady</span>
        </div>
        {/* <div className="bottom-label">Natalie Imbruglia</div> */}
        <div className="bottom-label">Eminem</div>
      </div>
      <div className="side left"></div>
      <div className="side right"></div>
      <div className="side top"></div>
      <div className="side bottom"></div>
      <div className="side front">
        <div className="top-label">
          <div className="round-sticker">
            <img width={43} height={43} src="plough.png" />
          </div>
          {/* <span className="title">Sheep</span> */}
          <span className="title" style={{ fontSize: 43 }}>
            The Real Michail O'Conaill
          </span>
        </div>
        <div className="bottom-label">Michail O’Flaithbheartaigh O'Conaill</div>
      </div>
    </div>
  );
};
