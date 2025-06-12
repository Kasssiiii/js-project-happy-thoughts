import React, { useState } from 'react';
import { MessageBox } from './components/MessageBox'
import { Thoughts } from './components/Thoughts'

export const App = () => {
const [posts, setPosts] = useState([]);
  return (
    <>
      <MessageBox posts={posts} setPosts={setPosts}/>
      <Thoughts posts={posts} setPosts={setPosts}/>
    </>
  )
}
