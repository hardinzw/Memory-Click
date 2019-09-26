import React from "react";
import "./style.css";

const Navbar = props => (
  <div className="navbar ">
    <div>Looney Memory</div>
    <div className={props.navMsgColor}>{props.navMsg}</div>
    <div>
      Score: {props.score} <span className="divider">|</span> High Score: {props.highScore}
    </div>
  </div>
);

export default Navbar;