import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./Button";

const App = () => {
  return (
    <div className="app">
      <img src={reactLogo} alt="React logo" className="app-img" />
      <h1 className="app-title">React</h1>
      <p className="app-desc">The library for web and native user interfaces</p>
      <div className="app-button-wrapper ">
        <Button className="app-button1" title="Learn React" />
        <Button className="app-button2" title="API Reference" />
      </div>
    </div>
  );
};

export default App;
