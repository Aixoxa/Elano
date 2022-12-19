import React from "react";
import "./Chathome.css";

function Chathome() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex pl-6">
          <div className="home_img_container">
            <img src="../images/timo.jpg" alt="" />
          </div>
          <div className="ml-3">
            <span className="block text-sm">Julia Justin</span>
            <span className="block text-xs">Victoria Seychelles</span>
          </div>
        </div>
        <div className="pr-4 mx-2">
          <span className="text-xs">15 mins ago</span>
        </div>
      </div>

      <div className="home_chat_content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, suscipit
          recusandae mollitia corrupti minus ipsa nisi delectus quibusdam quis
          doloremque esse voluptatum dolore ipsum autem incidunt laboriosam
          veritatis assumenda accusantium perspiciatis doloribus natus? Ut,
          mollitia?
        </p>
        <div className="content_img">
          <img src="../images/timo.jpg" alt="" />
        </div>
        <ul>
          <li>
            <i class="fa-regular fa-comment"></i> Comment
          </li>
          <li>
            <i class="fa-solid fa-heart"></i> Like
          </li>
          <li>
            <i class="fa-regular fa-paper-plane"></i> Send DM
          </li>
          <li>
            <i class="fa-solid fa-share-nodes"></i> Share
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Chathome;
