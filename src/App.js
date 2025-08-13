
// src/App.js
import React from "react";
import "./App.css";
import GooeyNav from "./components/GooeyNav/GooeyNav";

// Halaman utama
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Portofolio from "./pages/Portofolio";
import Kontak from "./pages/Kontak";
// Background partikel
import AnimatedBackground from "./components/ParticlesBackground";

function App() {
  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Skill", href: "#skill" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Kontak", href: "#kontak" }
  ];

  return (
    <>
      <AnimatedBackground />

      <div className="header">
        <div className="brand">QIQI</div>
        {/* Tambahkan GooeyNav di kanan, tampilan dan jarak sama seperti navbar awal */}
        <nav className="nav-links">
          <GooeyNav items={navItems} />
        </nav>
      </div>

      <div className="container">
        <section id="home">
          <Home />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="portofolio">
          <Portofolio />
        </section>
        <section id="kontak">
          <Kontak />
        </section>
      </div>
    </>
  );
}



export default App;