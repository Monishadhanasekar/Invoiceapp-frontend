import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    //read the data
    const result = await axios.get('https://invoiceapp-node.herokuapp.com/api/crud/product/');
    setProduct(result.data);
  };

  const deleteProduct = async id => {
    //delete the data
    await axios.delete('https://invoiceapp-node.herokuapp.com/api/crud/product/' + id);
    loadProducts();
  };

  return (
    <div style={{backgroundColor: "lightgray"}} className="container">
      <div className="py-4">
        <h1>Product data</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">ProductName</th>
              <th scope="col">Stock Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Tax rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {products.map((product, index) => (
              <tr>
                {/* updating the values in tables */}
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.stockQuantity}</td>
                <td>{product.price}</td>
                <td>{product.tax}</td>
                <td>
                  <td>
                    <Link to={"/edit/" + product._id}>edit</Link> | <a href="#" onClick={() => { deleteProduct(product._id) }}>delete</a>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
