import "../styles/ShowProfilePhotos.css";

function ShowProfilePhotos() {
  return (
    <div className="showphotos_wrapper">
      <div className="showphotos_left">
        <h5 className="showphotos_title">Show Profile Photos</h5>
        <p className="showphotos_desc">
          Choose whether to show or hide profile photos of other members
        </p>
      </div>

      <div className="showphotos_right">
        <input type="checkbox" id="showphotos_input" />
        <label
          htmlFor="showphotos_input"
          className="showphotos_checkbox"
        ></label>
      </div>
    </div>
  );
}

export default ShowProfilePhotos;
