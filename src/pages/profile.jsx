// pages/profile.jsx
import React from "react";
import { useNavigate } from "react-router";  // Removed unused Navigate import

function Profile() {
  let navigate = useNavigate();

  // Function to handle redirection
  const redirectToUser = () => {
    navigate("/user");
  };

  return (
    <div>
      <h1>Hello, this is your profile page.</h1>
      <button onClick={redirectToUser}>Click here to navigate to user details</button>
    </div>
  );
}

export default Profile;
