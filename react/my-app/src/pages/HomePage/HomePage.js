import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";

export const HomePage = () => {
  const [email, setEmail] = useState("");

  const clickFunction = () => {
    alert("I Clicked");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={clickFunction} style={{ color: "red" }}>
        Click Me
      </button>
      <button className="my-btn">My Button</button>
      <Button variant="contained">Hello World</Button>
      <br />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
};

export default HomePage;
