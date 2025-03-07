import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    profilePicture: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch user data (replace with actual API call)
  useEffect(() => {
    axios.get("/api/profile").then((response) => {
      setUser(response.data);
    }).catch((error) => {
      console.error("Error fetching profile data:", error);
    });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle profile update
  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.put("/api/profile", user);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    setLoading(false);
  };

  // Handle profile picture upload
  const handleImageUpload = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("profilePicture", image);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUser({ ...user, profilePicture: response.data.url });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-2xl font-bold text-center mb-4">Profile</h1>
      
      <div className="flex flex-col items-center">
        <img
          src={user.profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />

        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={handleImageUpload}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>

        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          className="border p-2 mb-4 w-full"
        />
        
        <input
          type="email"
          name="email"
          value={user.email}
          disabled
          className="border p-2 mb-4 w-full bg-gray-200"
        />
        
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
