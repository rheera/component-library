import { GiShirtButton } from "react-icons/gi";
import "../../scss/button.scss";

export default function Button({ icon = <GiShirtButton />, children }) {
  return (
    <button className="button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      {icon}
      <span>{children}</span>
    </button>
  );
}
