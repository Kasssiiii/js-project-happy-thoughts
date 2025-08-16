import React, { useState } from "react";
import moment from "moment";

import "./Thought.css";
import { likePost, deletePost, editPost } from "../thoughtsAPI";

export const Thought = ({ post, userData }) => {
  const [tick, tock] = useState(false);
  const [visible, setVisible] = useState(true);
  const [postText, setPostText] = useState(post.message);

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
    if (!userData) {
      return;
    }
    editPost(post._id, postText, userData.token, (code, data) => {
      if (code === 200) {
        post.message = postText;
        tock(!tick);
      }
    });
  };

  const isSameUser = userData && userData.user === post.userName;

  if (!visible) {
    return <></>; // Do not render if the post is deleted
  }

  return (
    <div className="postBox">
      {isSameUser
        ? <textarea
          className="messageArea"
          type="text"
          value={postText}
          onChange={(ev) => setPostText(ev.target.value)}
        />
        : <p> {post.message} </p>}

      <div className="details">
        <div className="leftDetails">
          <div>
            <button className="like" onClick={likeAction}>
              ❤️
            </button>{" "}
            x{post.hearts}
          </div>
          {isSameUser && (
            <>
              <div className="delete">
                <button onClick={deleteAction}>🗑️</button>
              </div>
              {postText !== post.message &&
                <div className="edit">
                  <button onClick={editAction}>💾</button>
                </div>
              }
            </>
          )}
        </div>
        <div> sent {moment(post.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};
