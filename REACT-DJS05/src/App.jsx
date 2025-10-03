import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/show/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
}

