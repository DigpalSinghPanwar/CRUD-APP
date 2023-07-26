import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td className="d-flex justify-content-between">
                    {/* <Link className="btn btn-primary mr-5">
                      <FontAwesomeIcon icon="fa-light fa-eye" />
                    </Link> */}
                    <Link to={`/users/${user.id}`}>
                      <FontAwesomeIcon icon={faEye} size="lg" />
                    </Link>
                    <Link to={`/users/edit/${user.id}`}>
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                    </Link>
                    <Link
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} size="lg" />
                    </Link>
                    {/* <Link className="btn btn-outline-primary mr-5 ml-2">
                      Edit
                    </Link>
                    <Link className="btn btn-danger">Delete</Link> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
