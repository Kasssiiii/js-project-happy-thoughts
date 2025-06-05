import React from "react";
import { Thought } from "./Thought";

export const Thoughts = () => {
  const postSample = [
    {
      _id: "5dd671c864cc480017f40979",
      message: "I'm happy because we're starting a fun new project",
      hearts: 22,
      createdAt: "2019-11-21T11:15:20.888Z",
      __v: 0,
    },
    {
      _id: "5dd6759064cc480017f4097a",
      message: "I just ate a super tasty lunch",
      hearts: 5,
      createdAt: "2019-11-21T11:31:28.547Z",
      __v: 0,
    },
  ];

  return (
    <>
      {postSample.map((post) => (
        <Thought key={post._id} post={post} />
      ))}
    </>
  );
};
