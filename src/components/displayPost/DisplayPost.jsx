import Post from "../Postt/Post";
import React, { useState } from "react";

function DisplayPost(props) {

  return (
    <div className="Display">
      {props.posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default DisplayPost;
