import React from "react";
import HomeContent from "./HomeContent";

function HomePage() {
  return (
    <div>
      <div className="home_line"></div>
      <div className="home">
        <div className="home_content">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
