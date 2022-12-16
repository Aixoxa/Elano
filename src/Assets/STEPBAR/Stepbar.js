import React, { useEffect } from "react";
import "./Stepbar.css";

function Stepbar({ signUpStatus, emailStatus, demoStatus, badgeStatus }) {
  useEffect(() => {
    const firstStatus = document.querySelector(
      ".stepbar_container div.step-1 "
    );

    const secondStatus = document.querySelector(
      ".stepbar_container div.step-2 "
    );

    const thirdStatus = document.querySelector(
      ".stepbar_container div.step-3 "
    );

    const fourthStatus = document.querySelector(
      ".stepbar_container div.step-4 "
    );

    if (signUpStatus) {
      firstStatus.style.setProperty("--first-step-color", "rgb(110, 248, 110)");
      secondStatus.classList.add("completed");
    }

    if (emailStatus) {
      secondStatus.style.setProperty(
        "--second-step-color",
        "rgb(110, 248, 110)"
      );
      thirdStatus.classList.add("completed");
    }

    if (demoStatus) {
      thirdStatus.style.setProperty("--third-step-color", "rgb(110, 248, 110)");
      fourthStatus.classList.add("completed");
    }
  }, [signUpStatus, emailStatus, demoStatus, badgeStatus]);

  return (
    <div className="w-full">
      <div className="stepbar_container">
        <div className="step-1 bg-white completed"></div>
        <div className="step-2 bg-white"></div>
        <div className="step-3 bg-white"></div>
        <div className="step-4 bg-white"></div>
      </div>
    </div>
  );
}

export default Stepbar;
