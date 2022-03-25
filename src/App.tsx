import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./routes/Home/Home";
import Show from "./routes/Show";
import Shows from "./routes/Shows";

function App() {
  return (
    <div>
      <Navigation />
      <Container className="mt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:showId" element={<Show />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
