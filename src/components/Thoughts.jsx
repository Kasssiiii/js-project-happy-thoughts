import React, { useEffect, useState } from "react";
import { Thought } from "./Thought";
import { getLatest } from "../thoughtsAPI";

export const Thoughts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatest((code, data) => {
      if (code === 200) {
        setPosts(data);
      } else {
        console.log(data);
      }
    });
  }, []);

  getLatest((code, data) => {
    console.log(data);
  });

  return (
    <>
      {posts.map((post) => (
        <Thought key={post._id} post={post} />
      ))}
    </>
  );
};
