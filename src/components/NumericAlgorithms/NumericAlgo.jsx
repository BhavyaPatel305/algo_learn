import React from 'react';
import './NumericAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const NumericAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Numeric Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Modular Arithmetic Algorithms</div>
        <div className="algorithm-card">Primality Testing (Miller-Rabin, Solovay-Strassen)</div>
        <div className="algorithm-card">Integer Factorization Algorithms (Pollard's Rho, Quadratic Sieve)</div>
        <div className="algorithm-card">Algorithms for Solving Systems of Linear Equations</div>
        <div className="algorithm-card">Algorithms for Matrix Computations (LU Decomposition, QR Decomposition)</div>
        <div className="algorithm-card">Numerical Integration Algorithms</div>
        <div className="algorithm-card">Numerical Differentiation Algorithms</div>
        <div className="algorithm-card">Root-Finding Algorithms (Bisection, Newton's Method)</div>
        <div className="algorithm-card">Polynomial Interpolation Algorithms</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default NumericAlgorithms;
