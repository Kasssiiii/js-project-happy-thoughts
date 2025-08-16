import React, { useState } from "react";
import moment from "moment";

import "./Thought.css";
import { likePost, deletePost, editPost } from "../thoughtsAPI";

export const Thought = ({ post, userData }) => {
  const [tick, tock] = useState(false);
  const [visible, setVisible] = useState(true);

  const likeAction = () => {
    likePost(post._id, (code, data) => {
      if (code === 200) {
        post.hearts = data.hearts;
        tock(!tick);
      }
    });
  };

  //deleted posts to be hidden 
  const deleteAction = () => {
    if (!userData) {
      return;
    }
    deletePost(post._id, userData.token, (code, data) => {
      if (code === 200) {
        setVisible(false);
      }
    });
  };

  const editAction = () => {
    console.log("Edit post");
  };

  const isSameUser = userData && userData.user === post.userName;

  if (!visible) {
    return <></>; // Do not render if the post is deleted
  }

  return (
    <div className="postBox">
      <p> {post.message} </p>
      <div className="details">
        <div>
          <button className="like" onClick={likeAction}>
            ❤️
          </button>{" "}
          x{post.hearts}
        </div>
        {isSameUser && (
          <>
            <div className="edit">
              <button onClick={editAction}>✏️</button>
            </div>
            <div className="delete">
              <button onClick={deleteAction}>🗑️</button>
            </div>
          </>
        )}
        <div> sent {moment(post.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};
