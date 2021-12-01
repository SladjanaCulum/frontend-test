import React from "react";
import "./App.css";
import { MainPage } from "./Components/MainPage/MainPage";
import { CreateUser } from "./Components/CreateUser/CreateUser";
import { User } from "./Components/User/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />

        <Route path="/createuser" element={<CreateUser />} />

        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
