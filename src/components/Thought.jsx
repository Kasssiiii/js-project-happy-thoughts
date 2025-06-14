import React, { useState } from "react";
import moment from "moment";

import "./Thought.css";
import { likePost } from "../thoughtsAPI";

export const Thought = ({ post }) => {
  const [tick, tock] = useState(false);

  const like = () => {
    likePost(post._id, (code, data) => {
      if (code === 200) {
        post.hearts = data.hearts;
        tock(!tick);
      }
    });
  };
  return (
    <div className="postBox">
      <p> {post.message} </p>
      <div className="details">
        <div>
          <button className="like" onClick={like}>
            ❤️
          </button>{" "}
          x{post.hearts}
        </div>
        <div> sent {moment(post.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};
