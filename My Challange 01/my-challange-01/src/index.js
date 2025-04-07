import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="/Assests/Images/jonas.jpeg"
      alt="Jonas Profile Photo"
      className="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1> Ushan Loshitha</h1>

      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill emoji="💪" skillName="React" color="purple"></Skill>
      <Skill emoji="💪" skillName="HTML+CSS" color="red"></Skill>
      <Skill emoji="💪" skillName="JavaScript" color="yellow"></Skill>
      <Skill emoji="👌" skillName="Svelete" color="green"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <div>{props.skillName}</div>
      <div>{props.emoji}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
