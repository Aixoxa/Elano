import React from "react";
import "./Badge.css";
import { Link } from "react-router-dom";

function Badge() {
  return (
    <div className="badge_parent_container">
      <h2 className="text-2xl font-semibold  mt-10 mb-6">Confirmation</h2>
      <div className="badge_container">
        <div className="image_container">
          <img src="../images/icons/badge.png" alt="" />
        </div>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Congratulations</h2>
        <p className="text-center">
          You have just earned EMC Digital Membership Badge.
        </p>
        <div className="button_container mt-20">
          <button>Share</button>
          <Link to="/welcome">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function BadgeConfirmation() {
  return (
    <div className="">
      <h2>Thank you!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga
        eaque est dignissimos eveniet. Sequi?
      </p>
    </div>
  );
}

export { Badge, BadgeConfirmation };
