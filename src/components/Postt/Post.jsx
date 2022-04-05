import "./Post.scss";
import React, { useState } from 'react';




const Post = (prop) => {
  const [like, setLike] = useState(false)
  const [dislike, setDislike ] = useState(false)
  
    return (
      <div className="PostCard">
        <div className="PostBody">
          <p>{prop.post.body}</p>
        </div>
        <div className="PostUser">
          <p>{prop.post.user}</p>
        </div>
        <div className="PostDate">
          <p>{prop.post.date}</p>
        </div>
          <div class ="btn-group">
            <button className={"Like " + (like && "active")} onClick={()=>setLike(!like)} >Like</button>
            <button className={"Dislike " + (dislike && "Active")} onClick={()=>setDislike(!dislike)}>Disike</button>
            </div>
      </div>
    );
  };
  
  export default Post;