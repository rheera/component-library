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

  const toolTipStyles = {
    opacity: 1,
    zIndex: 3,
  };

  return (
    <div className="tooltip-cnt">
      <div className="tooltip" style={showTooltip ? toolTipStyles : null}>
        <Banner type={type}>
          <Banner.Icon>{icon}</Banner.Icon>
          <Banner.Text title={title}>{text}</Banner.Text>
        </Banner>
        <div className={`tooltip__triangle ${color}`}></div>
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="tooltip-hover-div"
      >
        {children}
      </div>
    </div>
  );
}
