import React from "react";
import "./User.css";
import { Table } from "react-materialize";
import { Search } from "../Search/Search";
import { useState } from "react";
import { FormForCreatingUser } from "../FormForCreatingUser/FormForCreatingUser";

export const User = () => {
  const [search, setSearchTerm] = useState("");
    

  let users = JSON.parse(localStorage.getItem("users"));


  
  let deleteUser = () => {
      let usersObj = JSON.stringify(users);
    localStorage.removeItem("username")
    console.log(usersObj)
    
}

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
          <td><button onClick={deleteUser} className="button"> <i class="material-icons">delete</i></button></td>
          <td><button className="button" onClick={<FormForCreatingUser />}><i class="material-icons">edit</i></button></td>
        </tr>
      );
    });

    let allSumSalary = () => {
        let sum = 0;
        for(let i = 0; i < users.length; i++) {
            sum += parseInt(users[i].salary);
        }
        return sum;
    }

   

    
  return (
    <>
    
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
