import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css';
import Analytics from "./components/pages/analytics/Analytics";
import Home from "./components/pages/home/Home";
import NewProduct from "./components/pages/newProduct/NewProduct";
import NewUser from "./components/pages/newUser/NewUser";
import Product from "./components/pages/product/Product";
import ProductList from "./components/pages/productList/ProductList";
import Reports from "./components/pages/reports/Reports";
import Sales from "./components/pages/sales/Sales";
import Transactions from "./components/pages/transactions/Transactions";
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
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
