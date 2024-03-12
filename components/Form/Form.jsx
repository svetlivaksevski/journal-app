import "./Form.css";

export default function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2 className="title">NEW ENTRY</h2>
      <label htmlFor="motto" className="text">
        Motto
      </label>
      <input type="text" className="inputstyle" name="motto" />
      <label htmlFor="notes">Notes</label>
      <textarea type="text" className="inputstyle" rows="4" name="notes" />
      <div className="submit_button">
        <button type="submit" className="button">
          Create
        </button>
      </div>
    </form>
  );
}
