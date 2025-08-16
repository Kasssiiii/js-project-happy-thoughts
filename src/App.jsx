import React, { useState } from 'react';
import { MessageBox } from './components/MessageBox'
import { Thoughts } from './components/Thoughts'
import { LoginBar } from './components/LoginBar';

export const App = () => {
const [posts, setPosts] = useState([]);
const [userData, setUserData] = useState(null);

  return (
    <>
      <LoginBar setUserData={setUserData} userData={userData}/>
      <MessageBox posts={posts} setPosts={setPosts} userData={userData}/>
      <Thoughts posts={posts} setPosts={setPosts} userData={userData}/>
    </>
  )
}
