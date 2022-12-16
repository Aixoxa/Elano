import React, { useState, useRef, useEffect } from "react";
import "./Chatnav.css";
import { Bounce } from "react-reveal";
import { Link } from "react-router-dom";

function Chatnav({ setChatEvent }) {
  const [showNav, setShowNav] = useState(false);
  const mobileNav = useRef();

  useEffect(() => {
    const clicker = (e) => {
      !mobileNav.current.contains(e.target) && setShowNav(false);
    };

    document.addEventListener("click", clicker);

    return () => {
      document.removeEventListener("click", clicker);
    };
  }, []);
  return (
    <div>
      <div className="chatnav_container">
        <div className="avatar_container">
          <div className="avatar">
            <img src="../images/timo.jpg" alt="" />
          </div>
          <div className="avatar_caption">
            <h4>John.designer</h4>
            <span>(display badge)</span>
          </div>
        </div>
        <ul>
          <li onClick={() => setChatEvent(2)}>
            <img src="../images/icons/home.png" alt="" />
            Home
          </li>
          <li>
            <img src="../images/icons/bell.png" alt="" />
            Notification
          </li>
          <li onClick={() => setChatEvent(3)}>
            <img src="../images/icons/messenger.png" alt="" />
            Your DMs
          </li>
          <li onClick={() => setChatEvent(5)}>
            <img src="../images/icons/feed.png" alt="" />
            Your Feeds
          </li>
          <li>
            <img src="../images/icons/user.png" alt="" />
            Profile
          </li>
          <li>
            <img src="../images/icons/settings.png" alt="" />
            Settings
          </li>
          <li>
            <img src="../images/icons/writing.png" alt="" />
            iCreate
          </li>
          <li>
            <img src="../images/icons/more.png" alt="" />
            More
          </li>
        </ul>
        <h2>
          <Link to="/">ELANO</Link>
        </h2>
      </div>

      {/* MOBILE CHAT NAV */}
      <div
        className="bg-red-600 chat_nav_parent_container pr-10"
        ref={mobileNav}
      >
        <p onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}>
          click me!
        </p>
        <Bounce when={showNav} collapse>
          <div className="mobile_chatnav_container">
            <div className="mobile_avatar_container">
              <div className="avatar">
                <img src="../images/timo.jpg" alt="" />
              </div>
              <div className="avatar_caption">
                <h4>John.designer</h4>
                <span>(display badge)</span>
              </div>
            </div>
            <ul>
              <li onClick={() => setChatEvent(2)}>
                <img src="../images/icons/home.png" alt="" />
                Home
              </li>
              <li>
                <img src="../images/icons/bell.png" alt="" />
                Notification
              </li>
              <li onClick={() => setChatEvent(3)}>
                <img src="../images/icons/messenger.png" alt="" />
                Your DMs
              </li>
              <li onClick={() => setChatEvent(5)}>
                <img src="../images/icons/feed.png" alt="" />
                Your Feeds
              </li>
              <li>
                <img src="../images/icons/user.png" alt="" />
                Profile
              </li>
              <li>
                <img src="../images/icons/settings.png" alt="" />
                Settings
              </li>
              <li>
                <img src="../images/icons/writing.png" alt="" />
                iCreate
              </li>
              <li>
                <img src="../images/icons/more.png" alt="" />
                More
              </li>
            </ul>
            <h2 className="text-xl font-semibold transform translate-x-3">
              ELANO
            </h2>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Chatnav;
