import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TrackCard from "../components/TrackCard";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const fetchTracks = async (query) => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await response.json();
      setTracks(data.data);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  const handleTrackPlay = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
      <SearchBar onSearch={fetchTracks} />
      <div className="grid gap-4 mt-4">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} onPlay={handleTrackPlay} />
        ))}
      </div>
      {currentTrack && <MusicPlayer track={currentTrack} />}
    </div>
  );
};

export default Home;
