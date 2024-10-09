import React from "react";

function VideoItems() {
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-4">
          <div className="card-video">
            <video
              src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
              className="card-img-top-video"
              controls
            />
            <div className="card-body">
              <h5 className="card-title">Dance Video</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItems;
