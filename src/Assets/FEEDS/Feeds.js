import React from "react";
import "./Feeds.css";

function Feeds() {
  return (
    <div className="px-4 mt-8">
      <div className="user_feeds_container">
        <h3 className="font-semibold">Your Feed</h3>
        <ul>
          <li>
            <h4>
              <span className="mr-2">1.</span>Community feed
              <span className="block text-xs mt-1">
                5 misfits you follow just posted
              </span>
            </h4>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>
          <li>
            <h4>
              <span className="mr-2">2.</span>Society feed
              <span className="block text-xs mt-1">
                your society is buzzing
              </span>
            </h4>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>
          <li>
            <h4>
              <span className="mr-2">3.</span>NFT feed
              <span className="block text-xs mt-1">
                several misfits just posted
              </span>
            </h4>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>
          <li>
            <h4>
              <span className="mr-2">4.</span>Design feed
              <span className="block text-xs mt-1">
                5 misfits you follow just posted
              </span>
            </h4>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Feeds;
