import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    //declaring the state variable
    productName: "",
    stockQuantity: "",
    price: "",  
    tax:""
  });

  const { productName, stockQuantity, price, tax } = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://invoiceapp-node.herokuapp.com/api/crud/product/", product);
    navigate("/productlist");
  };
  return (
    <div style={{backgroundColor: "lightgray"}} className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the product name"
              name="productName"
              value={productName}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the stock quantity"
              name="stockQuantity"
              value={stockQuantity}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter the price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter the tax rate"
              name="tax"
              value={tax}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
         <br></br>
          
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
