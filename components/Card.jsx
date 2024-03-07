import React, { useState } from "react";
import starfilled from "../star-filled.svg";
import star from "../star.svg";

export default function Card({ entry }) {
  const [liked, setLiked] = useState(false);

  function toggleLiked() {
    setLiked(!liked);
  }

  return (
    <div className="card">
      <p className="date"> {entry.date}</p>
      <div className="inline">
        <h2 className="motto">{entry.motto} </h2>
        <img
          onClick={toggleLiked}
          src={liked ? starfilled : star}
          className="stars"
          alt="Star"
        ></img>
      </div>
      <p>{entry.notes}</p>
    </div>
  );
}
