import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";

function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_close-container">
        <div className="header_close-btn">
          <FontAwesomeIcon icon={faX} className="header_close-icon" />
          <p className="header_close-name">Close</p>
        </div>
      </div>

      <div className="header_title-container">
        <h3 className="header_title">Settings</h3>
      </div>
    </div>
  );
}

export default Header;
