import Header from "./Header";
import Language from "./Language";
import AutoPlay from "./AutoPlay";
import ShowProfilePhotos from "./ShowProfilePhotos";
import FooterButtons from "./FooterButtons";

import "../styles/Card.css";

function Card() {
  return (
    <div className="card_wrapper">
      <Header />
      <Language />
      <AutoPlay />
      <ShowProfilePhotos />
      <FooterButtons />
    </div>
  );
}

export default Card;
