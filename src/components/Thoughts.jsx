import React, { useEffect } from "react";
import { Thought } from "./Thought";
import { getLatest } from "../thoughtsAPI";

export const Thoughts = ({ posts, setPosts }) => {
  useEffect(() => {
    getLatest((code, data) => {
      if (code === 200) {
        setPosts(data);
      } else {
        console.log(data);
      }
    });
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <Thought key={index} post={post} />
      ))}
    </>
  );
};
