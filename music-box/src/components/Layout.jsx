import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/music-player">Music Player</Link></li>
        <li><Link to="/track-card">Track Card</Link></li>
        <li><Link to="/search-bar">Search Bar</Link></li>
      </ul>
    </nav>
  );
};

export default Layout;
