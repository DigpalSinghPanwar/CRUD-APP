import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data);
  };

  const { name, username, email, phone, website } = user;

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">{name}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {name}</li>
        <li className="list-group-item">user name: {username}</li>
        <li className="list-group-item">email: {email}</li>
        <li className="list-group-item">phone: {phone}</li>
        <li className="list-group-item">website: {website}</li>
      </ul>
    </div>
  );
};

export default View;
