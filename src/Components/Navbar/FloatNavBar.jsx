import React from "react";
import "./FloatNav.css";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
const FloatNavBar = () => {
  return (
    <div>
      <div className="outerTab">
        <div className="innerTab">
          <FaTools />
          skills
        </div>
        <div className="innerTab">
          <FaHome />
          Home
        </div>
        <div className="innerTab">
          <FaHistory />
          Exp..
        </div>
        <div className="innerTab">
          <FaProjectDiagram />
          Pro..
        </div>
        <div className="innerTab">
          <FaBlenderPhone />
          cont..
        </div>
      </div>
    </div>
  );
};

export default FloatNavBar;
