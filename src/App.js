import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Members from "./components/Members";

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: "Joshua",
      email: "codegod@gmail.com",
      role: "best ever"
    }
  ]);

  const addNewMember = data => {
    const newMember = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role: data.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HI this is form</h1>

        <Form addNewMember={addNewMember} />
        <Members member={member} />
      </header>
    </div>
  );
}

export default App;
