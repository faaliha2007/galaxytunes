import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TrackProvider } from "./context/TrackContext"; // ✅ match exactly
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <TrackProvider>
      <Router>
        <div className="flex min-h-screen bg-gradient-to-b from-black via-purple-900 to-indigo-900">
          {/* Sidebar */}
          <div className="w-64 bg-black/50 backdrop-blur-md p-6 flex flex-col">
            <h1 className="text-3xl font-bold mb-6 text-yellow-300">GalaxyTunes</h1>
            <Link to="/" className="mb-4 text-white hover:text-yellow-300 font-semibold">All Tracks</Link>
            <Link to="/favourites" className="mb-4 text-white hover:text-yellow-300 font-semibold">Liked Tracks</Link>
            <Link to="/leaderboard" className="mb-4 text-white hover:text-yellow-300 font-semibold">Leaderboard</Link>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TrackProvider>
  );
}

export default App;