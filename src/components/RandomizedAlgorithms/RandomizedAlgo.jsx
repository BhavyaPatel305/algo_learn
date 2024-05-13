import React from 'react';
import './RandomizedAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const RandomizedAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Randomized Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Randomized Quicksort</div>
        <div className="algorithm-card">Randomized Selection</div>
        <div className="algorithm-card">Monte Carlo Simulation</div>
        <div className="algorithm-card">Randomized Matching Algorithms</div>
        <div className="algorithm-card">Primality Testing (Miller-Rabin)</div>
        <div className="algorithm-card">Randomized Rounding</div>
        <div className="algorithm-card">Las Vegas Algorithms</div>
        <div className="algorithm-card">Monte Carlo Algorithms</div>
        <div className="algorithm-card">Randomized Algorithms for Graph Problems</div>
        <div className="algorithm-card">Randomized Algorithms for Geometric Problems</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default RandomizedAlgorithms;
