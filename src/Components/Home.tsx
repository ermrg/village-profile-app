import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div>
        <div className="title">
          <h3>खाँडादेवी गाउँपालिका</h3>
          <p>माकादुम , रामेछाप, प्रदेश नं ३</p>
        </div>
        <Link to="/village-profile-app/app">Village Profile App</Link>
      </div>
    </div>
  );
}
