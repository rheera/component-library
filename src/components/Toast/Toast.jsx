import Banner from "../Banner/index";
import { PiInfo } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import "../../scss/toast.scss";

export default function Toast({
  location = "right",
  icon = <PiInfo />,
  title = "Toast!",
  type = "neutral",
  text = "I'll be gone soon, don't miss me too much",
  onClose,
}) {
  return (
    <div className={`toast ${location}`}>
      <Banner type={type}>
        <Banner.Icon>{icon}</Banner.Icon>
        <Banner.Text title={title}>{text}</Banner.Text>
        <button onClick={onClose} className="toast__close">
          <AiOutlineClose />
        </button>
      </Banner>
    </div>
  );
}
