import typeToColor from "../../utility/typeToColor";
import "../../scss/banner.scss";

export default function Banner({ type = "neutral", children }) {
  const color = typeToColor(type);
  return <div className={`banner ${color}`}>{children}</div>;
}
