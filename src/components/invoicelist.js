import React, { useState, useEffect } from "react";
import axios from "axios";

const InvoicesList = () => {
  const [invoices, setInvoice] = useState([]);

  useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = async () => {
    //read the data
    const result = await axios.get('https://invoiceapp-node.herokuapp.com/api/crud/invoice/');
    setInvoice(result.data);
  };

  const deleteInvoice = async id => {
    //delete the data
    await axios.delete('https://invoiceapp-node.herokuapp.com/api/crud/invoice/' + id);
    loadInvoices();
  };

  return (
  
    <div style={{backgroundColor: "lightgray"}} className="container">
      <div className="py-4">
        <h1>Invoice data</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Invoice No</th>
              <th scope="col">Client name</th>
              <th scope="col">Cashier name</th>
              <th scope="col">Invoice date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {invoices.map((invoice, index) => (
              <tr>
                {/* updating the values in tables */}
                <th scope="row">{index + 1}</th>
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.clientName}</td>
                <td>{invoice.cashierName}</td>
                <td>{invoice.invoiceDate}</td>
                <td>
                  <td>
                    <a href="#" onClick={() => { deleteInvoice(invoice._id) }}>delete</a>
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

export default InvoicesList;
