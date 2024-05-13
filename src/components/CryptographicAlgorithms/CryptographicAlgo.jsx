import React from 'react';
import './CryptographicAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const CryptographicAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Cryptographic Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">RSA Algorithm</div>
        <div className="algorithm-card">Diffie-Hellman Key Exchange</div>
        <div className="algorithm-card">AES (Advanced Encryption Standard)</div>
        <div className="algorithm-card">SHA (Secure Hash Algorithm)</div>
        <div className="algorithm-card">Elliptic Curve Cryptography</div>
        <div className="algorithm-card">Discrete Logarithm-based Cryptography</div>
        <div className="algorithm-card">Lattice-based Cryptography</div>
        <div className="algorithm-card">Homomorphic Encryption Algorithms</div>
        <div className="algorithm-card">Quantum Cryptography Algorithms</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default CryptographicAlgorithms;
