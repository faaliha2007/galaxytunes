import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-pink-500">StudentGram</div>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-pink-500 transition">Home</Link>
        <Link to="/favourites" className="hover:text-pink-500 transition">Favourites</Link>
        <Link to="/leaderboard" className="hover:text-pink-500 transition">Leaderboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;