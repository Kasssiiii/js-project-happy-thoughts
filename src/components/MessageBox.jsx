import React, { useState } from "react";

import "./MessageBox.css";

export const MessageBox = ({posts, setPosts}) => {
  const [post, setPost] = useState("");

  const sendPost = () => {
    console.log("sending post");
  };

  return (
    <form className="messageBox" onSubmit={(ev) => ev.preventDefault()}>
      <label>What's making you happy right now? </label>
      <textarea
        className="messageArea"
        type="text"
        value={post}
        onChange={(ev) => setPost(ev.target.value)}
      />
      <button onClick={sendPost} className="sendPost">
        ❤️ Send Happy Thought! ❤️
      </button>
    </form>
  );
};
