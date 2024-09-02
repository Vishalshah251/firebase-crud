import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, getDatabase, onValue, remove } from "firebase/database";
import { app, database } from "./firebase";

function Home() {
  const navigate = useNavigate(); 
  const [users, setUsers] = useState("");

  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "crud");
    onValue(userRef, (snapshot) => {
      setUsers(snapshot.val());
    });
  }, []);

  function Add_user() {
    navigate("/Add");
  }

  function handleDelete(key) {
    const db = getDatabase(app); 
    const userRef = ref(db, "crud/" + key);
    remove(userRef)
      .then(() => {
        alert("User deleted successfully");
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  }

  function handleEdit(id, val) {
    navigate("/Edit", { state: { id, val } });
  }

  return (
    <div>
      <button onClick={Add_user}>Add User</button>
      <h1>Display the list of all users</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            Object.entries(users).map(([key, val]) => (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>
                  <button onClick={() => handleEdit(key, val)}>Edit</button>
                  <button onClick={() => handleDelete(key)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
