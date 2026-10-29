import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [ison, setIson] = useState(false);

  function handletoggleswitch() {
    setIson(!ison);
  }

  const checkIson = ison ? "on" : "off";
  const toggleBGcolor = { backgroundColor: ison ? "#4caf50" : "" };

  return (
    <div
      className="toggle-switch"
      style={toggleBGcolor}
      onClick={handletoggleswitch}
    >
      <div className={`switch ${checkIson}`}>
        <span className="switch-state">{checkIson}</span>
      </div>
    </div>
  );
};
