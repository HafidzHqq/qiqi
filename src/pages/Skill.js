
// src/pages/Skill.js
import React from "react";
import ScrollFloat from "../components/ScrollFloat/ScrollFloat";

function Skill() {
  return (
    <div className="page" id="skill">
      {/* Wrapper untuk memusatkan konten */}
      <div className="skill-content">
        <ScrollFloat animationDuration={3} stagger={0.07}>
          ⚙️ Skill
        </ScrollFloat>
        <ul>
          <li>✅ HTML, CSS, JavaScript</li>
          <li>✅ React.js & Node.js</li>
          <li>✅ C++ & Python</li>
          <li>✅ Arduino & IoT Prototyping</li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;

