import { createContext, useState } from "react";


export const TrackContext = createContext();


export const TrackProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const tracks = [
    { id: 1, title: "Starlight Echo", artist: "Nova Beats", genre: "Electronic", mood: "Chill", energy: 80, cover: "https://i.pravatar.cc/150?img=5" },
    { id: 2, title: "Cosmic Drift", artist: "Galaxia", genre: "Ambient", mood: "Relax", energy: 60, cover: "https://i.pravatar.cc/150?img=6" },
    { id: 3, title: "Nebula Pulse", artist: "AstroVibes", genre: "Synthwave", mood: "Energetic", energy: 90, cover: "https://i.pravatar.cc/150?img=7" },
    { id: 4, title: "Meteor Shower", artist: "Celestials", genre: "Chillhop", mood: "Smooth", energy: 70, cover: "https://i.pravatar.cc/150?img=8" },
    { id: 5, title: "Natasha", artist: "Celestials", genre: "Synthwave", mood: "Smooth", energy: 80, cover: "https://i.pravatar.cc/150?img=42" },

    { id: 6, title: "Jungkook", artist: "BTS", genre: "Chillhop", mood: "Chill", energy: 60, cover: "https://i.pravatar.cc/150?img=58" },
    { id: 7, title: "Abyankar", artist: "Black Pink", genre: "Synthwav", mood: "Emotional", energy: 90, cover: "https://i.pravatar.cc/150?img=57" },
    { id: 8, title: "Dhanush", artist: "7up music", genre: "Synthwav", mood: "Energitic", energy: 80, cover: "https://i.pravatar.cc/150?img=54" },
    { id: 9, title: "Aniruth", artist: "Taylor", genre: "Chillhop", mood: "Smooth", energy: 70, cover: "https://i.pravatar.cc/150?img=60" },
    { id: 10, title: "Shasha", artist: "Think Music", genre: "Chillhop", mood: "Relax", energy: 80, cover: "https://i.pravatar.cc/150?img=45" },
    { id: 11, title: "Chinmai", artist: "Sony Music", genre: "Synthwav", mood: "Energitic", energy: 60, cover: "https://i.pravatar.cc/150?img=41" },
    { id: 12, title: "Taylor", artist: "saregamapa", genre: "Chillhop", mood: "Smooth", energy: 90, cover: "https://i.pravatar.cc/150?img=32" },

  ];

  const toggleFavourite = (id) => {
    const track = tracks.find(t => t.id === id);
    if (favourites.find(t => t.id === id)) {
      setFavourites(favourites.filter(t => t.id !== id));
    } else {
      setFavourites([...favourites, track]);
    }
  };

  const value = { tracks, favourites, toggleFavourite };

  return <TrackContext.Provider value={value}>{children}</TrackContext.Provider>; 
};
