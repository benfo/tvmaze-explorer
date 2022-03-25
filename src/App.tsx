import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Schedule from "./routes/Schedule";
import Show from "./routes/Show";
import Shows from "./routes/Shows";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:showId" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
