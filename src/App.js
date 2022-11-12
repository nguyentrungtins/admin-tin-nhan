import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auths/Login";
import Register from "./components/Auths/Register";
import Spinner from "./components/Layouts/Spinner";
import Chart from "./components/Contents/Chart";
import SideBar from "./components/Layouts/SideBar";
import Orders from "./components/Contents/orders/Orders";
import Customers from "./components/Contents/Customers";
function App() {
  return (
    <>
      <Router>
        <SideBar></SideBar>
        <Routes>
          <Route
            path="/"
            element={<Chart />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/customers"
            element={<Customers />}
          />
          <Route
            path="/orders"
            element={<Orders />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
