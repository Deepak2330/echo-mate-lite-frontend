import React, { useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([
    { username: "Deepak", content: "Hello, this is my first post!" },
    { username: "Sangeeta", content: "Excited to be here!" },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Feed</h1>
      {posts.map((post, index) => (
        <Post key={index} username={post.username} content={post.content} />
      ))}
    </div>
  );
};

export default Home;
