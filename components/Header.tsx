import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";


function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo"></div>
        <div className="header_bar">
          <div className="header_pages">
            <Link href="/">
              <p className="home-color">HOME</p>
            </Link>
            <Link href="/events">
              <p>EVENTS</p>{" "}
            </Link>
            <Link href="/gallery">
              {" "}
              <p>GALLERY</p>{" "}
            </Link>
            <Link href="/about">
              <p>ABOUT</p>{" "}
            </Link>
            <Link href="/blog">
              <p>BLOG</p>{" "}
            </Link>
            <Link href="/team">
              <p>OUR TEAM</p>{" "}
            </Link>
          </div>
        </div>
        <button className="theme_btn">
          <ModeToggle />
        </button>
        <button type="button" className="header_btn">
          CONTACT US
        </button>
        
      </div>
    </div>
  );
}

export default Header;
