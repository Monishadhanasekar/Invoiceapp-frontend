import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    productName: "",
    stockQuantity: "",
    price: "",
    tax: "",
  });

  const { productName, stockQuantity, price, tax } = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://invoiceapp-node.herokuapp.com/api/crud/product/${id}`, product);
    navigate("/productlist");
  };

  const loadProduct = async () => {
    const result = await axios.get(`https://invoiceapp-node.herokuapp.com/api/crud/product/${id}`);
    setProduct(result.data);
  };

  return (
    <div style={{backgroundColor: "lightgray"}} className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A product</h2>
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
              placeholder="Enter the quantity"
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
          <button className="btn btn-warning btn-block">Update product</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
