import React from "react";
import "./style.css";
import Button from "@mui/material/Button";

export const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
