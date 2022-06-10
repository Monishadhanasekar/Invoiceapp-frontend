import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import CreateInvoice from "./components/invoice";
import CreateProduct from "./components/product";
import Dashboard from "./components/dashboard";
import ProductsList from "./components/listproducts";
import Front from "./components/front";
import EditProduct from "./components/editproduct";
import InvoicesList from "./components/invoicelist";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateInvoice />} />
        <Route path="/" element={<Front />} />
        <Route path="/product" element={<CreateProduct />} />
        <Route path="/productlist" element={<ProductsList />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/invoicelist" element={<InvoicesList />} />
      </Routes>
    </>
  );
}

export default App;
