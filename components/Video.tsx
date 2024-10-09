import React from "react";
import VideoItems from "./VideoItems";

function Video() {
  return (
    <div className="video">
      <p className="heading">VIDEOS</p>
      <p className="heading_line"></p>
      <div className="video_collection">
        <VideoItems />
        <VideoItems />
        <VideoItems />
      </div>
    </div>
  );
}

export default Video;
