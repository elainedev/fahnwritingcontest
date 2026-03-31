import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Menu from "./Menu";
import Guidelines from "./Guidelines";
import SubmitEntries from "./SubmitEntries";
import Poems, { Poem } from "./Poems";
import ShortStories, { ShortStory } from "./ShortStories";
import Filks, { Filk } from "./Filks";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1>2024 FAHn Writing Contest</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/submit" element={<SubmitEntries />} />
          <Route path="/stories" element={<ShortStories />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/irishfarmerhits" element={<Filks />} />
          <Route path="/poems/:id" element={<Poem />} />
          <Route path="/stories/:id" element={<ShortStory />} />
          <Route path="/irishfarmerhits/:id" element={<Filk />} />
        </Routes>
        <BackToMenuLink />
      </Router>
    </div>
  );
}

function BackToMenuLink() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="menu-link">{!isHome && <Link to="/">Main Menu</Link>}</div>
  );
}

export default App;
