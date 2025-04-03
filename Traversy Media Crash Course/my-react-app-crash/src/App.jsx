import React from "react";

const App = () => {
  const name = "Ushan";
  const x = 5;
  const y = 1;
  const names = ["Ushan", "Loshitha", "Alwis"];
  const loggedIn = true;

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{ color: "purple", fontSize: "24px" }}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((mynames, index) => (
          <li key={index}> {mynames}</li>
        ))}
      </ul>
      {loggedIn ? <h1> Hello Member</h1> : <h1>You Have Not Logged in yet</h1>}
    </>
  );
};

export default App;
