import React from "react";
import "./FormForCreatingUser.css";

export const FormForCreatingUser = ({
  handleOnChange,
  handleShowBubble,
  show,
  handleCloseBubble,
  submitValue,
}) => {
  return (
    <form className="style" id="mainForm">
      <div className="form-group">
        <label for="userName">Firstname</label>
        <input
          onChange={handleOnChange}
          name="firstName"
          type="text"
          class="form-control"
          id="userName"
          placeholder="Enter firstname"
        ></input>

        <label for="userLastName">Lastname</label>
        <input
          onChange={handleOnChange}
          name="lastName"
          type="text"
          class="form-control"
          id="userLastName"
          placeholder="Enter lastname"
        ></input>

        <label for="username">Username</label>
        <input
          onChange={handleOnChange}
          name="username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter username"
        ></input>

        <label for="inputEmail">Email address</label>
        <input
          onChange={handleOnChange}
          name="email"
          type="email"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        ></input>

        <label for="phoneNumber">Phone Number</label>
        <input
          onChange={handleOnChange}
          name="phoneNumber"
          type="number"
          class="form-control"
          id="phoneNumber"
          placeholder="Enter phone number"
        ></input>

        <label for="userAddress">Address</label>
        <input
          onChange={handleOnChange}
          name="address"
          type="text"
          class="form-control"
          id="userAddress"
          placeholder="Enter address"
        ></input>

        <label for="salary">Salary</label>
        <input
          onChange={handleOnChange}
          name="salary"
          type="number"
          class="form-control"
          id="salary"
          placeholder="Enter salary"
        ></input>
      </div>
      <button onClick={handleShowBubble} type="button" class="btn" id="submit">
        Submit
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
            onClick={submitValue}
          >
            Yes
          </button>
        </div>
      </div>
    </form>
  );
};
