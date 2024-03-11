import React from "react";
import starfilled from "../../star-filled.svg";
import star from "../../star.svg";
import "./Cards.css";
import "./Badge.css";

export default function EntriesSection({
  entries,
  setEntries,
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  function toggleLiked(id) {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, isFavorite: !entry.isFavorite };
      }
      return entry;
    });
    setEntries(updatedEntries);
  }

  return (
    <>
      <div className="nav">
        <span className="category category--selected"> All entries</span>
        <span
          className="count count--selected"
          onClick={onShowAllEntries}
          isActive={filter === "all"}
        >
          <div isActive={filter === "all"}> {allEntriesCount} </div>
        </span>
        <span className="category"> Favorites</span>
        <span
          className="count"
          onClick={onShowFavoriteEntries}
          isActive={filter === "favorites"}
        >
          <div isActive={filter === "favorites"}>{favoriteEntriesCount}</div>
        </span>
      </div>
      <div className="card">
        {entries.map((entry) => (
          <div key={entry.id}>
            <p className="date"> {entry.date}</p>
            <div className="inline">
              <h2 className="motto">{entry.motto} </h2>
              <img
                onClick={() => toggleLiked(entry.id)}
                src={entry.isFavorite ? starfilled : star}
                className="stars"
                alt="Star"
              ></img>
            </div>
            <p>{entry.notes}</p>
            <div className="dots"></div>
          </div>
        ))}
      </div>
    </>
  );
}
