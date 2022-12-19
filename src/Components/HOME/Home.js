import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Assets/NAVBAR/Navbar";
import { Fade } from "react-reveal";

function Home() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    arrows: false,
  };
  return (
    <Fade>
      <div className="">
        <Navbar />
        <div className="home_parent_container" style={{ padding: "0 30px" }}>
          <div className="home_container">
            <div className="home_content">
              <h2>
                Welcome to{" "}
                <span className="block transform -translate-y-4">ELANO</span>
              </h2>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum at voluptas autem molestiae dolorem suscipit natus optio
                iure ullam commodi.
              </p>
              <div className="home_btns">
                <button>Learn More</button>
                <button>Continue</button>
              </div>
            </div>
            <div className="home_image">
              <Slider {...settings}>
                <img src="../images/vr.gif" alt="" />
                <img src="../images/desiger.gif" alt="" />
                <img src="../images/company.gif" alt="" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Home;
