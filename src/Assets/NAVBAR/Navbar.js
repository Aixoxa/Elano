import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Bounce } from "react-reveal";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const menuElement = useRef(null);

  useEffect(() => {
    function clickListener(e) {
      return !menuElement.current.contains(e.target) && setShow(false);
    }

    window.addEventListener("click", clickListener);

    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, []);

  return (
    <div>
      <div className="navbar_container">
        <div data-type="logo">ELANO</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="#">Studio</NavLink>
          </li>
          <li>
            <NavLink to="#">Magazine</NavLink>
          </li>
          <li>
            <NavLink to="#">Innovation</NavLink>
          </li>
          <li>
            <NavLink to="#">About Us</NavLink>
          </li>
        </ul>

        <div className="navbar_auth">
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>

          <NavLink to="/signup">
            <span>Sign Up</span>
          </NavLink>
        </div>
      </div>

      {/* MOBILE-NAVBAR */}
      <div style={{ paddingBottom: 80 }}>
        <div className="mobile_navbar_container" ref={menuElement}>
          <div data-type="mobile_logo">
            <NavLink to="/">
              <h2>ELANO</h2>
            </NavLink>
            <div
              style={{ height: 20, width: 20 }}
              onClick={() => (!show ? setShow(true) : setShow(false))}
            >
              <img src="images/icons/ham.png" alt="" />
            </div>
          </div>
          <Bounce left when={show} collapse>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="#">Studio</NavLink>
              </li>

              <li>
                <NavLink to="#">Magazine </NavLink>
              </li>

              <li>
                <NavLink to="#">Innovation</NavLink>
              </li>

              <li>
                <NavLink to="#">About Us </NavLink>
              </li>
            </ul>

            <div className="mobile_navbar_auth">
              <span>
                <NavLink to="/login">Login </NavLink>
              </span>

              <NavLink to="/signup">
                <span>Sign Up</span>
              </NavLink>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
