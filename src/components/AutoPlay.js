import React, { useState } from "react";
import "../styles/AutoPlay.css";

function AutoPlay() {
  const [isChecked, setIsChecked] = useState(true);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="autoplay_wrapper">
      <div className="autoplay_left">
        <h5 className="autoplay_title">Autoplay videos</h5>
        <p className="autoplay_desc">
          Choose if you want to autoplay on your browser
        </p>
      </div>

      <div className="autoplay_right">
        <input
          type="checkbox"
          id="autoplay_input"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="autoplay_input" className="autoplay_checkbox"></label>
      </div>
    </div>
  );
}

export default AutoPlay;
