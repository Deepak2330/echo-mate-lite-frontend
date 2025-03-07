import { useState, useEffect } from "react";
import { fetchPosts, createPost } from "../api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts().then((response) => setPosts(response.data));
  }, []);

  // Handle Post Submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to log in first.");
      return;
    }

    try {
      await createPost({ content }, token);
      setContent(""); // Clear input field
      window.location.reload(); // Refresh to show new post
    } catch (error) {
      console.error("Error creating post", error);
      alert("Failed to create post.");
    }
  };

  return (
    <div>
      <h2>Home Feed</h2>

      {/* Post Creation Form */}
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          name="content"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>

      {/* Display Posts */}
      <div>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index}>
              <h4>{post.username}</h4>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
