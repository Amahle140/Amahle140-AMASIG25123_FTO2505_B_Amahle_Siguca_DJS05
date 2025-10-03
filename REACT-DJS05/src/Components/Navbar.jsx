import { Link } from "react-router-dom";

export default function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Podcast-App</Link>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search podcasts..."
      />
    </nav>
  );
}
