import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css';
import Home from "./components/pages/home/Home";
import NewUser from "./components/pages/newUser/NewUser";
import User from "./components/pages/user/User";
import UserList from "./components/pages/userList/UserList";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
