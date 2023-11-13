import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper"
      style={{
        color: "white",
        // position: "relative",
        paddingBottom: "2rem",
        backgroundColor: "var(--black)",
      }}
    >
      <div className="hero-container">
        {/* left side */}
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br />
              Most Suitable <br /> Property
            </h1>
          </div>

          <div
            className="hero-des"
            style={{ paddingLeft: "2rem", fontWeight: "70rem"}}
          >
            <span
              style={{
                fontSize: "27px",
                fontFamily: "poppins",
                lineHeight: "3rem",
              }}
            >
              find a varsity of property that suit you very easily <br /> forget
              all difficulties in finding a residence for you
            </span>
            {/* <span> forget all difficulties in finding a residence for you</span> */}
          </div>

          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size="3rem" />
            <input type="text" placeholder="Location" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats" style={{display:"flex"}}>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
                  
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        {/* {right side} */}

        <div
          className="hero-right"
          style={{ display: "flex", justifyContent: "right" }}
        >
          <div
            className="image-container"
            style={{
              position: "relative",
              top: "-40em",
              right: "2rem",
              width: "30rem",
              height: "35rem",
              overflow: "hidden",
              borderRadius: "15rem 15rem 0 0",
              border: "8px solid rgba(255, 255, 255, 0.13)",
            }}
          >
            <img
              src="./hero-image.png"
              alt=""
              style={{width: "100%", height: "100%"}}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
