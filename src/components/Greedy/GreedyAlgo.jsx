import React from 'react';
import './GreedyAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const GreedyAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Greedy Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Huffman Coding</div>
        <div className="algorithm-card">Kruskal's Algorithm</div>
        <div className="algorithm-card">Prim's Algorithm</div>
        <div className="algorithm-card">Activity Selection Problem</div>
        <div className="algorithm-card">Job Scheduling Problem</div>
        <div className="algorithm-card">Fractional Knapsack Problem</div>
        <div className="algorithm-card">Interval Scheduling</div>
        <div className="algorithm-card">Karp's Minimum Mean Cycle Algorithm</div>
        <div className="algorithm-card">Kruskal's Algorithm for Minimum Spanning Tree</div>
        <div className="algorithm-card">Prim's Algorithm for Minimum Spanning Tree</div>
        <div className="algorithm-card">Dijkstra's Algorithm for Shortest Path</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default GreedyAlgorithms;
