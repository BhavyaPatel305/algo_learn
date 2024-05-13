import React from 'react';
import './HashingAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const HashingAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Hashing Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Hash Tables</div>
        <div className="algorithm-card">Hash Functions (Modular, Division, Multiplication, Universal, Perfect)</div>
        <div className="algorithm-card">Collision Resolution Techniques (Chaining, Open Addressing)</div>
        <div className="algorithm-card">Cuckoo Hashing</div>
        <div className="algorithm-card">Double Hashing</div>
        <div className="algorithm-card">Universal Hashing</div>
        <div className="algorithm-card">Consistent Hashing</div>
        <div className="algorithm-card">Rendezvous Hashing</div>
        <div className="algorithm-card">Pearson Hashing</div>
        <div className="algorithm-card">Jenkins Hash Function</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default HashingAlgorithms;
