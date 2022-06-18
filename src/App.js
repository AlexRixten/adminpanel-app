import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css';
import Home from "./components/pages/home/Home";
import NewProduct from "./components/pages/newProduct/NewProduct";
import NewUser from "./components/pages/newUser/NewUser";
import Product from "./components/pages/product/Product";
import ProductList from "./components/pages/productList/ProductList";
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
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
