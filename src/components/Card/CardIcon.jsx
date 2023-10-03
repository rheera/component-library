import { PiConfettiBold } from "react-icons/pi";

export default function CardIcon({
  children,
  backgroundColor = "#3f75fe",
  iconColor = "#ffffff",
}) {
  const iconStyles = {
    color: iconColor,
    backgroundColor,
  };

  return (
    <div className="card__icon" style={iconStyles}>
      {!children ? <PiConfettiBold /> : children}
    </div>
  );
}
