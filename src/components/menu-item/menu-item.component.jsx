import React from "react";

import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <Link className={`${size} menu-item`} to={title}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">BUY NOW</span>
      </div>
    </Link>
  );
}

export default MenuItem;
