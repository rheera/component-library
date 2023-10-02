import "../../scss/banner.scss";

export default function Banner({ type = "neutral", children }) {
  const color =
    type === "error"
      ? "red"
      : type === "warning"
      ? "yellow"
      : type === "success"
      ? "green"
      : "blue";
  return <div className={`banner ${color}`}>{children}</div>;
}
