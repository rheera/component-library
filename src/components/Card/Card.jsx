import { TbCloudUpload } from "react-icons/tb";
import "../../scss/card.scss";

export default function Card() {
  return (
    <div className="card">
      <div className="card__icon">
        <TbCloudUpload />
      </div>
      <div className="card__text">
        <h3 className="card__text__title">Title</h3>
        <p className="card__text__para">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </p>
      </div>
    </div>
  );
}
