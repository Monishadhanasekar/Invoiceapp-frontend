import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Invoice app</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create invoice</Link>
            </li>
            <li className="navbar-item">
              <Link to="/product" className="nav-link">Create product</Link>
            </li>
            <li className="navbar-item">
              <Link to="/productlist" className="nav-link">All products</Link>
            </li>
            <li className="navbar-item">
              <Link to="/invoicelist" className="nav-link">All invoices</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


