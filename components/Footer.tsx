import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo"></div>
      <div className="footer_line"></div>
      <div className="footer_pages">
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
      <div className="footer_line"></div>
      <div className="footer_tags">
      <div className="footer_location">
        <div className="location_image">
          <p className="footer_text">
            DND CLUB <br />
            NATIONAL INSTITUTE OF TECHNOLOGY CALICUT <br />
            KOZHIKODE, KERALA <br />
            673 002
          </p>
        </div>
      </div>
      <div className="footer_contact">
        <p className="footer_text">
          CONTACT US <br />
          0495 222 111 <br />
          0495 222 111
        </p>
      </div>
      </div>
      <div className="footer_line"></div>
      <div className="theme_text">
        <div className="main_text">

        DANCE AND DRAMATICS CLUB
        </div>
      </div>
    </div>
  );
}

export default Footer;
