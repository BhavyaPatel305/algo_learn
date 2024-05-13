import React from 'react';
import './SearchingAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const SearchingAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Searching Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">
          <Link to="/searching-algorithms/linear-search" className="algorithm-link">Linear Search</Link>
        </div>
        <div className="algorithm-card">Binary Search</div>
        <div className="algorithm-card">Depth-First Search (DFS)</div>
        <div className="algorithm-card">Breadth-First Search (BFS)</div>
        <div className="algorithm-card">Interpolation Search</div>
        <div className="algorithm-card">Exponential Search</div>
        <div className="algorithm-card">Jump Search</div>
        <div className="algorithm-card">Fibonacci Search</div>
        <div className="algorithm-card">Ternary Search</div>
        <div className="algorithm-card">Hashing-based Search</div>
        <div className="algorithm-card">Suffix Array Search</div>
        <div className="algorithm-card">Karp-Rabin Algorithm</div>
        <div className="algorithm-card">Boyer-Moore Algorithm</div>
        <div className="algorithm-card">Knuth-Morris-Pratt (KMP) Algorithm</div>
        <div className="algorithm-card">Trie-based Search</div>
        <div className="algorithm-card">Bloom Filter</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default SearchingAlgorithms;
