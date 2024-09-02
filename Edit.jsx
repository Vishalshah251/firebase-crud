import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';
import { app } from "./firebase";

export default function Edit() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize state with existing data
  const [user, setUser] = useState({
    name: location.state.val.name,
    email: location.state.val.email,
  });

  // Handle input changes and update state
  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  // Handle form submission and update Firebase
  function handleEdit(e) {
    e.preventDefault();

    const db = getDatabase(app);
    const dbRef = ref(db, "crud/" + location.state.id);

    update(dbRef, {
      name: user.name,
      email: user.email,
    })
      .then(() => {
        alert("User updated successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        alert("Failed to update user. Please try again.");
      });
  }

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleEdit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleInputChange}
        />
        <hr />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleInputChange}
        />
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
