import { useState, useContext } from "react";
import { TrackContext } from "../context/TrackContext"; 

function TrackRow({ track }) {
  const { favourites, toggleFavourite } = useContext(TrackContext); 
  const isFav = favourites.find(t => t.id === track.id);
  const [animate, setAnimate] = useState(false);

  const handleFav = () => {
    toggleFavourite(track.id);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 mb-2 rounded-lg hover:scale-105 hover:shadow-xl transition-transform relative bg-gradient-to-r from-indigo-900 via-purple-900 to-black">
      <div className="flex items-center gap-4">
        <img src={track.cover} alt={track.title} className="w-12 h-12 rounded-full border-2 border-white" />
        <div>
          <p className="text-white font-bold">{track.title}</p>
          <p className="text-gray-300 text-sm">{track.artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-purple-300 font-semibold">{track.genre}</p>
        <p className="text-yellow-300">{track.mood}</p>
        <p className="text-pink-400">{track.energy}%</p>
        <button
          onClick={handleFav}
          className={`text-2xl text-yellow-400 focus:outline-none ${animate ? "scale-125 transition-transform duration-300" : ""}`}
        >
          {isFav ? "⭐" : "☆"}
        </button>
      </div>
      {isFav && <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>}
    </div>
  );
}

export default TrackRow;
