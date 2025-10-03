import { useState } from "react";
import EpisodeCard from "./EpisodeCard";

export default function SeasonAccordion({ season }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="season">
      <button onClick={() => setOpen(!open)}>
        {season.title} ({season.episodes.length} episodes) {open ? "−" : "+"}
      </button>
      {open && (
        <div className="episodes">
          {season.episodes.map((ep, idx) => (
            <EpisodeCard key={idx} episode={ep} />
          ))}
        </div>
      )}
    </div>
  );
}
