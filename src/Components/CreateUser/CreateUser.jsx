import React, { useEffect } from "react";
import "./CreateUser.css";
import { useState } from "react";
import { User } from "../../entitis/user";
import { FormForCreatingUser } from "../FormForCreatingUser/FormForCreatingUser";

export const CreateUser = () => {
  let initialUser = new User();
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    users = [];
  }
  const [usersList, setUsersList] = useState(users);
  const [show, setShow] = useState(false);
  const handleCloseBubble = () => setShow(false);
  const [user, setUser] = useState(initialUser);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
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

  const submitValue = (event) => {
    event.preventDefault();
    setUsersList([...usersList, user]);
    document.getElementById("mainForm").reset();
    setShow(false);
  };

  console.log(usersList);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersList));
  }, [usersList]);


  return (
    <FormForCreatingUser
      handleOnChange={handleOnChange}
      handleShowBubble={handleShowBubble}
      show={show}
      handleCloseBubble={handleCloseBubble}
      submitValue={submitValue}
    />
  );
};
