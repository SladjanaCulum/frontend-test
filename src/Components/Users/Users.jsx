import React from "react";
import "./Users.css";
import { Table } from "react-materialize";
import { Search } from "../Search/Search";
import { useState } from "react";
import { FormForCreatingUser } from "../FormForCreatingUser/FormForCreatingUser";
import { useNavigate } from "react-router-dom";

export const Users = ({
  show,
  handleCloseBubble,
  handleShowBubble,
  setShow,
}) => {
  const [search, setSearchTerm] = useState("");
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));

  let navigate = useNavigate();
  let deleteUser = (username) => {
    const updateUser = users.filter((user) => user.username !== username);
    setUsers(updateUser);
    localStorage.setItem("users", JSON.stringify(updateUser));
    setShow(false);
  };

  let component = users
    .filter((user) => {
      let result = null;
      if (search === "") {
        result = user;
      } else if (user.firstName.toLowerCase().includes(search.toLowerCase())) {
        result = user;
      } else if (user.lastName.toLowerCase().includes(search.toLowerCase())) {
        result = user;
      }
      return result;
    })
    .map((user) => {
      return (
        <tr className="listElementReports">
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.address}</td>
          <td>{user.salary}</td>
          <td>
            <button onClick={handleShowBubble} className="button">
              <i class="material-icons">delete</i>
            </button>
            <div
              className="youSureBubble"
              style={{ display: show ? "block" : "none" }}
            >
              <p>Are you sure?</p>
              <div>
                <button
                  className="btn yesNo"
                  type="button"
                  onClick={handleCloseBubble}
                >
                  No
                </button>
                <button
                  className="btn linkHover yesNo"
                  id="submitYes"
                  onClick={() => deleteUser(user.username)}
                >
                  Yes
                </button>
              </div>
            </div>
          </td>
          <td>
            <button className="button" onClick={<FormForCreatingUser />}>
              <i class="material-icons">edit</i>
            </button>
          </td>
        </tr>
      );
    });

  let allSumSalary = () => {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
      sum += parseInt(users[i].salary);
    }
    return sum;
  };

  return (
    <>
      <button
        className="newButton"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>

      <button
        className="newButton"
        onClick={() => {
          navigate("/createuser");
        }}
      >
        Create user
      </button>

      <Search setSearchTerm={setSearchTerm} />
      <Table className="content-table">
        <thead className="listElementReports">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Salary</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="listElementReports">{component}</tbody>
        <tr className="listElementReports">
          <th colSpan="6">Sumary</th>
          <th>{allSumSalary()}</th>
          <th></th>
          <th></th>
        </tr>
      </Table>
    </>
  );
};
