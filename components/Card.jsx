import { useState } from "react";
import starfilled from "../star-filled.svg";
import star from "../star.svg";

export default function Card() {
  const [liked, setLiked] = useState(false);

  function toggleLiked() {
    setLiked(!liked);
  }

  console.log(123);
  return (
    <section className="card">
      <p className="dates"> MARCH 03,2024</p>
      <div className="startandtext">
        <h2 className="card__heading">"That's life in the city" </h2>
        <img
          onClick={toggleLiked}
          src={liked ? starfilled : star}
          className="bmimg"
        ></img>
      </div>
      <p class="hidden_answer">
        Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
        mihi. Et quidem se repellere, idque instituit decere sic omne animal,
        simul atque.
      </p>
    </section>
  );
}
