// user/userDetails.jsx
import React from "react";

function UserDetails() {
  const user = {
    name: "Krishna",
    age: 25,
  };

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserDetails;
