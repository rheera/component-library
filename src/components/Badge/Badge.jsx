import "../../scss/badge.scss";

export default function Badge({ children, color = "gray", rounded = false }) {
  return (
    <div className={`badge ${color} badge--${rounded ? "rounded" : ""}`}>
      <span className="badge__text">{children}</span>
    </div>
  );
}
