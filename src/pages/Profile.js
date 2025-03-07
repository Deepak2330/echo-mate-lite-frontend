import { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getProfile(token).then((response) => setProfile(response.data));
    }
  }, [token]);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? <p>Welcome, {profile.message}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Profile;
