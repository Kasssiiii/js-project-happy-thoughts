import React from "react";
import moment from "moment";

import "./Thought.css";

export const Thought = ({ post }) => {
  console.log(post);
  return (
    <div className="postBox">
      <p> {post.message} </p>
      <div className="details">
        <div>
          <button className="like">❤️</button> x{post.hearts}
        </div>
        <div> sent {moment(post.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};
