import React from "react";
import MusicIcon from "../images/icon-music.svg";
import "./ServicePlan.css";

const ServicePlan = () => {
  return (
    <div className="selection">
      <div className="icon-plan-container">
        <img className="music-icon" src={MusicIcon} alt="music notes" />
        <div className="plan">
          <p className="plan-type">Annual Plan</p>
          <p className="price">$59.99/year</p>
        </div>
      </div>
      <a className="change-link" href="">
        Change
      </a>
    </div>
  );
};

export default ServicePlan;
