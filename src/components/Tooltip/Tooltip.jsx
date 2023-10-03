import { useState } from "react";
import Banner from "../Banner/index";
import { TbTooltip } from "react-icons/tb";
import typeToColor from "../../utility/typeToColor";
import "../../scss/tooltip.scss";

export default function Tooltip({
  children,
  icon = <TbTooltip />,
  title = "Tooltip",
  type = "neutral",
  text = "Entering some text would make for a better tooltip, don't you think?",
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const color = typeToColor(type);

  function handleMouseEnter() {
    setShowTooltip(true);
  }

  function handleMouseLeave() {
    setShowTooltip(false);
  }

  const tooltipStyles = {
    opacity: 1,
    display: 1,
  };

  return (
    <>
      <div className="tooltip" style={{ opacity: showTooltip ? 1 : 0 }}>
        <Banner type={type}>
          <Banner.Icon>{icon}</Banner.Icon>
          <Banner.Text title={title}>{text}</Banner.Text>
        </Banner>
        <div className={`tooltip__triangle ${color}`}></div>
      </div>
      <div
        className="tooltip-hover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </>
  );
}
