/* eslint-disable react/prop-types */
import { useRef } from "react";

const MusicPlayer = ({ track }) => {
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="w-full max-w-[320px] mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-zinc-900">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-yellow-500"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx={6} cy={18} r={3} />
            <circle cx={18} cy={16} r={3} />
          </svg>
          <div className="mx-3">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              {track?.title || "Track Title"}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {track?.artist?.name || "Artist Name"}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-red-500"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400 ml-4"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center" />
      </div>

      {/* The Audio Player */}
      <div className="px-6 py-4">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          </svg>
          <div className="w-full mx-3">
            <div className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-800">
              <div className="absolute left-0 top-0 h-full bg-yellow-500 w-1/2" />
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
        </div>

        {/* Play/Pause Controls */}
        <button
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handlePlayPause}
        >
          {audioRef.current?.paused ? "Play" : "Pause"}
        </button>
      </div>

      {/* The Audio Element */}
      <audio ref={audioRef} src={track?.preview || "default_audio_url.mp3"} />
    </div>
  );
};

export default MusicPlayer;
