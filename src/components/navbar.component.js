import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div className="container-fluid mt-3">
     <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">TODO</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/user" className="nav-link">CREATE USER</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">EXERCISES</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">CREATE EXERCISES LOG</Link>
          </li>
        </ul>
        </div>
      </nav>
      </div>
    );
  }
}