import { useState } from "react";
import { database } from "./firebase"; 
import { ref, set } from "firebase/database"; 

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    const userId = Date.now().toString(); 
    const userRef = ref(database, `crud/${userId}`);

    set(userRef, {
      name: name,
      email: email
    })
    .then(() => {
      alert("The data has been stored successfully");
      setName("");
      setEmail("");
    })
    .catch((err) => {
      console.log("The error:", err);
    });
  }

  return (
    <div className="container">
      <h1>Add New User</h1>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <hr />
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <hr />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Add;
