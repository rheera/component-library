import { GiShirtButton } from "react-icons/gi";
import typeToColor from "../../utility/typeToColor";
import "../../scss/button.scss";

export default function Button({
  icon = <GiShirtButton />,
  children,
  color = "gray",
  ...rest
}) {
  return (
    <button
      {...rest}
      className={`button font-bold py-2 px-4 rounded inline-flex items-center ${color}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
