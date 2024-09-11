import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/profile",
          {
            withCredentials: true, // Ensure cookies are sent with the request
          }
        );
        console.log(`Response: ${response}`);
        console.log(`Data from Response: ${response.data}`);
        setUser(response.data.user); // Assuming the user data is in response.data.user
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Welcome, {user ? user.fullname : "User"}!</h1>
      {/* Render more user data here as needed */}
    </div>
  );
};

export default Dashboard;
