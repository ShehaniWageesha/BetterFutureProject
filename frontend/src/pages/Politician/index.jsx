import React from "react";
import { Link } from "react-router-dom";

function Politician() {
  return (
    <div className="DashMain">
      <div>
        <Link to="/createPolitician" className="nav-link">
          <h1>Add Politician</h1>
        </Link>
      </div>
      <div>
        <Link to="/politicians" className="nav-link">
          <h1>Politicians</h1>
        </Link>
      </div>
    </div>
  );
}

export default Politician;
