import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";
import TrackCard from "./components/TrackCard";
import MusicPlayer from "./components/MusicPlayer";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout /> {/* Use Layout component for navigation */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/music-player" element={<MusicPlayer />} />
        <Route path="/track-card" element={<TrackCard />} />
        <Route path="/search-bar" element={<SearchBar />} />
      </Routes>
    </Router>
  );
};

export default App;
