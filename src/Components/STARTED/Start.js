import React from "react";
import "./Start.css";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="start_container">
      <div className="start_content_container">
        <div className="start_content bg-transparent">
          <h2>
            Society sucks!! Join us create the alternate society you'll like to
            <span>
              <Link to="#">LIVE IN.</Link>
            </span>
          </h2>

          <div className="mt-16">
            <button className="mx-auto">Get Started</button>
            <button className="mx-auto">Log In</button>
          </div>
        </div>
      </div>

      <div className="start_img_container bg-white">
        <div className="start_image">
          <img src="../images/draw-vr.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Start;
