import React from "react";
import "./CreateUser.css";
import { FormForCreatingUser } from "../FormForCreatingUser/FormForCreatingUser";
import { useNavigate } from "react-router-dom";

export const CreateUser = ({
  show,
  submitValue,
  handleCloseBubble,
  users,
  setUser,
  user,
  handleShowBubble,
}) => {
  let navigate = useNavigate();
  if (!users) {
    users = [];
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
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
          navigate("/users");
        }}
      >
        Users
      </button>
      <FormForCreatingUser
        handleOnChange={handleOnChange}
        handleShowBubble={handleShowBubble}
        show={show}
        handleCloseBubble={handleCloseBubble}
        submitValue={submitValue}
      />
    </>
  );
};
