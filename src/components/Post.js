import React from "react";

const Post = ({ username, content }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg my-4">
      <h2 className="font-bold">{username}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Post;
