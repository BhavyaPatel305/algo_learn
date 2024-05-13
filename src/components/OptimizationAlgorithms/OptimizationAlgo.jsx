import React from 'react';
import './OptimizationAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const OptimizationAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Optimization Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Linear Programming Algorithms (Simplex, Interior Point)</div>
        <div className="algorithm-card">Integer Programming Algorithms (Branch and Bound, Branch and Cut)</div>
        <div className="algorithm-card">Nonlinear Optimization Algorithms (Gradient Descent, Newton's Method)</div>
        <div className="algorithm-card">Constrained Optimization Algorithms (Lagrange Multipliers)</div>
        <div className="algorithm-card">Metaheuristic Algorithms (Genetic Algorithms, Simulated Annealing)</div>
        <div className="algorithm-card">Dynamic Programming Algorithms for Optimization Problems</div>
        <div className="algorithm-card">Convex Optimization Algorithms</div>
        <div className="algorithm-card">Stochastic Optimization Algorithms</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default OptimizationAlgorithms;
