import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="flex">
      <div className="welcome_caption_container bg-transparent w-1/2 min-h-screen">
        <h2>ELANO</h2>
        <div className="welcome_caption_content">
          <div className="">
            <h2 className="">Welcome to ELANO, we've been expecting you!</h2>

            <button>Continue</button>
          </div>
        </div>
      </div>

      <div className="welcome_image_container bg-white min-h-screen w-1/2">
        <div className="">
          <img src="../images/welcome.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
