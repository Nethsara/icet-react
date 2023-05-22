import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./style.css";

export const HomePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setID] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const clickFunction = () => {
    alert("I Clicked");
  };

  const saveData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setBody("");
        setTitle("");
        setID("");
      })
      .catch((e) => console.error(e));
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
        type="text"
        placeholder="Enter your title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter your body"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Enter your id"
        value={id}
        onChange={(e) => {
          setID(e.target.value);
        }}
      />

      <button onClick={saveData}>Save</button>

      {data.map((v) => {
        return (
          <div key={v.id} className="container">
            <h1>{v.title}</h1>
            <p>{v.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
