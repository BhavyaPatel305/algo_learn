import React from 'react';
import './DynamicProgrammingAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const DynamicProgrammingAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Dynamic Programming Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Fibonacci Series</div>
        <div className="algorithm-card">Longest Common Subsequence</div>
        <div className="algorithm-card">Knapsack Problem</div>
        <div className="algorithm-card">Edit Distance</div>
        <div className="algorithm-card">Longest Increasing Subsequence</div>
        <div className="algorithm-card">Rod Cutting</div>
        <div className="algorithm-card">Matrix Chain Multiplication</div>
        <div className="algorithm-card">Coin Change Problem</div>
        <div className="algorithm-card">Optimal Binary Search Tree</div>
        <div className="algorithm-card">Shortest Common Supersequence</div>
        <div className="algorithm-card">Optimal Substructure Problems</div>
        <div className="algorithm-card">Memoization Techniques</div>
        <div className="algorithm-card">Tabulation Methods</div>
        <div className="algorithm-card">Dynamic Time Warping</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default DynamicProgrammingAlgorithms;
