import React from "react";
import DanceRight from "./DanceRight";
import DanceLeft from "./DanceLeft";

function DanceStyle() {
  return (
    <div>
      <div className="dance">
        <p className="dance_heating_text">make a move</p>
        <p className="dance_heading">Choose Your Dream Dance Style</p>
        <div className="dance_collection">
          <DanceRight />
          <DanceLeft />
          <DanceRight />
        </div>
        <div className="dance_btn">
          <button className="dance_btn">More &rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default DanceStyle;
