import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SeasonAccordion from "../Components/SeasonAccordion";

export default function ShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load show");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!show) return <p>Show not found</p>;

  return (
    <div className="show-detail">
      <Link to="/">← Back</Link>
      <div className="header">
        <img src={show.image} alt={show.title} />
        <div>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
          <p>Last Updated: {new Date(show.updated).toDateString()}</p>
        </div>
      </div>

      <h2>Seasons</h2>
      {show.seasons.map((season) => (
        <SeasonAccordion key={season.id} season={season} />
      ))}
    </div>
  );
}
