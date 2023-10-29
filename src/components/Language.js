import "../styles/Language.css";

function Language() {
  return (
    <div className="language_wrapper">
      <h5 className="language_title">Language</h5>
      <p className="langauge_desc">
        Let us know which langauge you're most comfortable using. You can change
        it back any time.
      </p>

      <select className="language_select">
        <option selected>English</option>
        <option>Arabic</option>
        <option>Spanish</option>
        <option>German</option>
      </select>

      <hr className="language_hr"></hr>
    </div>
  );
}

export default Language;
