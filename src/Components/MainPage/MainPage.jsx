import React from "react";
import "./MainPage.css";
import { useNavigate} from "react-router-dom"

export const MainPage = () => {
  let navigate = useNavigate();


   
  return (
    <nav className=" paddingNav">
      <div className="container-fluid border">
        <form className="d-flex">
          <button onClick={() => {navigate("/createuser")}}>Create User</button>
        </form>
        <form className="d-flex">
          <button onClick={() => {navigate("/user")}}>Users</button>
        </form>
      </div>
    </nav>
  );
};
