import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="name">
          <h2>Dashboard</h2>
        </div>
        <div className="profile">
          <p>Admin</p>
          <button className="Pfp"></button>
        </div>
      </header>
    </div>
  );
};

export default Header;
