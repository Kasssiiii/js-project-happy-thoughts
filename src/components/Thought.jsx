import React from "react";

import "./Thought.css";

export const Thought = () => {
  return (
    <div className="postBox">
      <p> Thought </p>
      <div className="details">
        <div>
          <button className="like">❤️</button> x10
        </div>
        <div> sent .. X min ago</div>
      </div>
    </div>
  );
};
