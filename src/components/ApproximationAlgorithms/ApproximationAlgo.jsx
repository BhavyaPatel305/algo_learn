import React from 'react';
import './ApproximationAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const ApproximationAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Approximation Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Knapsack Problem</div>
        <div className="algorithm-card">Vertex Cover Problem</div>
        <div className="algorithm-card">Traveling Salesman Problem</div>
        <div className="algorithm-card">Set Cover Problem</div>
        <div className="algorithm-card">Facility Location Problem</div>
        <div className="algorithm-card">Scheduling Algorithms (List Scheduling, Longest Processing Time)</div>
        <div className="algorithm-card">Approximation Algorithms for NP-Hard Problems</div>
        <div className="algorithm-card">Randomized Approximation Algorithms</div>
        <div className="algorithm-card">Primal-Dual Approximation Algorithms</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default ApproximationAlgorithms;
