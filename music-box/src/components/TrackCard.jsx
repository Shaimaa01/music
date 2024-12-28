/* eslint-disable react/prop-types */

const TrackCard = ({ track, onPlay }) => {
  if (track){
    return (
      <div
        className="flex items-center gap-4 p-4 border rounded-md hover:bg-gray-100 cursor-pointer"
        onClick={() => onPlay(track)}
      >
        <img
          src={track.album.cover_small}
          alt={track.title}
          className="w-16 h-16 rounded-md"
        />
        <div>
          <h3 className="font-semibold">{track.title}</h3>
          <p className="text-sm text-gray-600">{track.artist.name}</p>
          <p className="text-sm text-gray-500 italic">{track.album.title}</p>
        </div>
      </div>
    );
  } else{
    return <div>Loading...</div>; 
  }
 
};

export default TrackCard;
