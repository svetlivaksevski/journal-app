import "./Form.css";

export default function Form() {
  return (
    <form className="container">
      <h2 className="title">NEW ENTRY</h2>
      <label htmlFor="Motto" className="text">
        Motto
      </label>
      <input type="text" className="inputstyle" />
      <label htmlFor="Notes">Notes</label>
      <textarea type="text" className="inputstyle" rows="4" />
      <div className="submit_button">
        <button type="submit" className="button">
          Create
        </button>
      </div>
    </form>
  );
}
