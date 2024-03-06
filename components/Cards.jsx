import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards() {
  return (
    <>
      <div className="nav">
        <span className="category category--selected"> All entries</span>
        <span className="count count--selected"> 3 </span>
        <span className="category"> Favorites</span>
        <span className="count"> 1 </span>
      </div>

      <Card />
      <div class="dots"></div>
      <Card />
      <div class="dots"></div>
      <Card />
      <div class="dots"></div>
    </>
  );
}
