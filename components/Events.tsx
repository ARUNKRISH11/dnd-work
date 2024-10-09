import React from "react";
import EventsItems from "./EventsItems";

function Events() {
  return (
    <div>
      <div className="event">
        <p className="heading">EVENTS</p>
        <p className="heading_line"></p>
        <div className="event_collection">
          <EventsItems />
          <EventsItems />
          <EventsItems />
          <button type="button" className="event_btn_left">
            {" "}
            &larr;{" "}
          </button>
          <button type="button" className="event_btn_right">
            {" "}
            &rarr;{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
