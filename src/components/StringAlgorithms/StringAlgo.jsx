import React from 'react';
import './StringAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const StringAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">String Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Knuth-Morris-Pratt (KMP) Algorithm</div>
        <div className="algorithm-card">Aho-Corasick Algorithm</div>
        <div className="algorithm-card">Suffix Array Construction</div>
        <div className="algorithm-card">Longest Common Prefix</div>
        <div className="algorithm-card">Regular Expression Matching</div>
        <div className="algorithm-card">Manacher's Algorithm (Longest Palindromic Substring)</div>
        <div className="algorithm-card">Burrows-Wheeler Transform</div>
        <div className="algorithm-card">LZW (Lempel-Ziv-Welch) Compression</div>
        <div className="algorithm-card">Levenshtein Distance Calculation</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default StringAlgorithms;
