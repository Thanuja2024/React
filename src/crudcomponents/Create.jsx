import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./create.css";
import { toast } from "react-toastify";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, phone };
    // console.log(payload);
    axios
      .post("http://localhost:8000/users", payload)
      .then((res) => {
        // console.log("user created successfully");
        toast.success("user created successfully")
        navigate("/");
      })
      .catch((err) => toast.error("user not created"));
  };
  return (
    <div className="formBlock">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="tel"
          placeholder="phone number"
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />

        <input type="submit" value="Create User" />
        <Link to="/">Back to Home page</Link>
      </form>
    </div>
  );
};

export default Create;
