import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./Button";
import Navbar from "./Navbar";

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <div className="app">
        <img src={reactLogo} alt="React logo" className="app-img" />
        <h1 className="app-title">React</h1>
        <p className="app-desc">
          The library for web and native user interfaces
        </p>
        <div className="app-button-wrapper ">
          <Button className="app-button1" title="Learn React" />
          <Button className="app-button2" title="API Reference" />
        </div>
        <div className="app-buttons">
          <h1 className="app-title2 ">{count}</h1>
          <div className="app-button-wrapper ">
            <button
              className="text"
              onClick={() => {
                setCount(++count);
                {
                  if (count > 33) {
                    setCount(0);
                  }
                }
              }}
            >
              Count
            </button>
            <button
              className="text"
              onClick={() => {
                setCount(0);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
