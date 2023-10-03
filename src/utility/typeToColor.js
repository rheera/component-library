export default function typeToColor(type) {
  return type === "error"
    ? "red"
    : type === "warning"
    ? "yellow"
    : type === "success"
    ? "green"
    : "blue";
}
