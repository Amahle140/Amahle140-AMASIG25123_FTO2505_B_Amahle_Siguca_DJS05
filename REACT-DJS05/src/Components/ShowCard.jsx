import { Link } from "react-router-dom";

export default function ShowCard({ show }) {
  return (
    <Link to={`/show/${show.id}`} className="show-card">
      <img src={show.image} alt={show.title} />
      <h2>{show.title}</h2>
      <p>{show.description.substring(0, 80)}...</p>
    </Link>
  );
}
