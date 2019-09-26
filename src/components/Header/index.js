import React from "react";
import "./style.css";

function Header(props) {
  return (
  <header className="header">
    <ul>
      <li className="brand">
        <a href="">{props.children}</a>
      </li>
      <li className="update"></li>
      <li className="score">
      </li>
    </ul>
    </header>
  );
}

export default Header;