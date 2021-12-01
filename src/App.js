import React from "react";
import "./App.css";
import { MainPage } from "./Components/MainPage/MainPage";
import { CreateUser } from "./Components/CreateUser/CreateUser";
import { Users } from "./Components/Users/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { User } from "./entitis/user";

function App() {
  let initialUser = new User();
  let users = JSON.parse(localStorage.getItem("users"));
  const [user, setUser] = useState(initialUser);
  const [usersList, setUsersList] = useState(users);
  const [show, setShow] = useState(false);
  const handleCloseBubble = () => setShow(false);

  const submitValue = (event) => {
    event.preventDefault();
    const updatedUserList = [...usersList, user];
    localStorage.setItem("users", JSON.stringify(updatedUserList));
    setUsersList(updatedUserList);
    document.getElementById("mainForm").reset();
    setShow(false);
  };

  const handleShowBubble = () => {
    let cehckIfUsernameExist = usersList.find(
      (e) => e.username === user.username
    );

    if (cehckIfUsernameExist) {
      alert("Username already exists");
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />

        <Route
          path="/createuser"
          element={
            <CreateUser
              handleShowBubble={handleShowBubble}
              user={user}
              setUser={setUser}
              users={users}
              show={show}
              handleCloseBubble={handleCloseBubble}
              submitValue={submitValue}
            />
          }
        />

        <Route
          path="/users"
          element={
            <Users
              handleShowBubble={handleShowBubble}
              show={show}
              handleCloseBubble={handleCloseBubble}
              submitValue={submitValue}
              setShow={setShow}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
