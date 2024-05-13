import React from 'react';
import './RecursionBasedAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const RecursionBasedAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Recursion-based Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Fibonacci Series</div>
        <div className="algorithm-card">Factorial Computation</div>
        <div className="algorithm-card">Tower of Hanoi</div>
        <div className="algorithm-card">Quicksort</div>
        <div className="algorithm-card">Merge Sort</div>
        <div className="algorithm-card">Exponentiation by Squaring</div>
        <div className="algorithm-card">N-Queens Problem</div>
        <div className="algorithm-card">Subset Generation</div>
        <div className="algorithm-card">Backtracking Algorithms</div>
        <div className="algorithm-card">Branch and Bound Algorithms</div>
        <div className="algorithm-card">Recursive Descent Parsing</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default RecursionBasedAlgorithms;
