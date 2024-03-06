import "./Cards.css";
import starfilled from "../star-filled.svg";
import star from "../star.svg";

export default function Cards() {
  return (
    <>
      <div className="nav">
        <span className="category category--selected"> All entries</span>
        <span className="count count--selected"> 3 </span>
        <span className="category"> Favorites</span>
        <span className="count"> 1 </span>
      </div>
      <section className="card">
        <p className="dates"> MARCH 03,2024</p>
        <div className="startandtext">
          <h2 className="card__heading">"That's life in the city" </h2>
          <img src={starfilled} className="bmimg"></img>
        </div>
        <p class="hidden_answer">
          Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
          mihi. Et quidem se repellere, idque instituit decere sic omne animal,
          simul atque.
        </p>
      </section>
      <div class="dots"></div>
      <section className="card">
        <p className="dates"> MARCH 03,2024</p>
        <div className="startandtext">
          <h2 className="card__heading">"That's life in the city" </h2>
          <img src={star} className="bmimg"></img>
        </div>
        <p class="hidden_answer">
          Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
          mihi. Et quidem se repellere, idque instituit decere sic omne animal,
          simul atque.
        </p>
      </section>
      <div class="dots"></div>
      <section className="card">
        <p className="dates"> MARCH 03,2024</p>
        <div className="startandtext">
          <h2 className="card__heading">"That's life in the city" </h2>
          <img src={starfilled} className="bmimg"></img>
        </div>
        <p class="hidden_answer">
          Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
          mihi. Et quidem se repellere, idque instituit decere sic omne animal,
          simul atque.
        </p>
      </section>
    </>
  );
}
