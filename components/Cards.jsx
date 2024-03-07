import React from "react";
import "./Cards.css";
import Card from "./Card.jsx";
import { entries } from "../components/EntriesSection.jsx";

export default function Cards() {
  return (
    <>
      <div className="nav">
        <span className="category category--selected"> All entries</span>
        <span className="count count--selected"> {entries.length} </span>
        <span className="category"> Favorites</span>
        <span className="count"> 1 </span>
      </div>

      {entries.map((entry) => (
        <div key={entry.id}>
          <Card entry={entry} />
          <div className="dots"></div>
        </div>
      ))}
    </>
  );
}
