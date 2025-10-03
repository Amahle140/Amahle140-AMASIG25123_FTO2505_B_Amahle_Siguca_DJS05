
export default function EpisodeCard({ episode }) {
  return (
    <div className="episode">
      <h3>{episode.title}</h3>
      <p>{episode.description.substring(0, 120)}...</p>
      <small>
        {episode.duration} min | {new Date(episode.date).toDateString()}
      </small>
    </div>
  );
}
