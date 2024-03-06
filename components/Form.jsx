import "./Form.css";

export default function Form() {
  return (
    <>
      <form className="formstyle">
        <legend className="title">NEW ENTRY</legend>
        <label for="Motto">Motto</label>
        <input type="text" className="inputone"></input>
        <label for="Notes">Notes</label>
        <textarea type="text" className="inputtwo"></textarea>
        <section className="submit_button">
          <button type="submit" className="button">
            Create
          </button>
        </section>
      </form>
    </>
  );
}
