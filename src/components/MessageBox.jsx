import React, { useState } from "react";

import "./MessageBox.css";
import { sendPost } from "../thoughtsAPI";

export const MessageBox = ({ posts, setPosts, userData }) => {
  const [post, setPost] = useState("");

  const sendThought = () => {
    // ensure user data is present
    if (!userData) {
      console.log("User is not logged in");
      return;
    }

    sendPost(post, userData.token, (code, data) => {
      if (code === 200) {
        setPosts([data, ...posts]);
        setPost("");
      } else {
        console.log(data);
      }
    });
  };

  return (
    <form className="messageBox" onSubmit={(ev) => ev.preventDefault()}>
      <label for="message"> What's making you happy right now? </label>
      <textarea
        className="messageArea"
        type="text"
        id="message"
        value={post}
        onChange={(ev) => setPost(ev.target.value)}
      />
      <button onClick={sendThought} className={userData ? "sendPost sendPostEnabled" : "sendPost sendPostDisabled"} disabled={!userData}>
        ❤️ Send Happy Thought! ❤️
      </button>
    </form>
  );
};
