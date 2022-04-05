import React, { useState } from 'react';
import DisplayPost from "./components/displayPost/DisplayPost"
import CreatePost from "./components/createPost/CreatePost"
import NavBar from './components/NavBar/NavBar';
import './App.scss'

function App() {

  const [posts, setPost] = useState([
    {
      body: "Hey!!",
      user: "Zachary LaForge",
      date: "2022-04-29",
    },
  ]);

  function addNewPost(post) {
    let temp = [...posts, post];
    setPost(temp);
  }

  return (
    <div className="App">
    <NavBar />
    <div className="content">
      <div className="formContainer">
        <div className="form">
          <CreatePost setPost={addNewPost} />
        </div>
      </div>
      <div className="displayContainer">
          <DisplayPost posts={posts} />
      </div>
    </div>
  </div>
);
}

export default App;