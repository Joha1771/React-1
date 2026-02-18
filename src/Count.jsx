import React, { useState } from "react";
const Count = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="count-app">
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
  );
};

export default Count;
