import React from 'react';
import './DivideAndConquerAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const DivideAndConquerAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Divide and Conquer Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Merge Sort</div>
        <div className="algorithm-card">Quick Sort</div>
        <div className="algorithm-card">Strassen's Algorithm (Matrix Multiplication)</div>
        <div className="algorithm-card">Cooley-Tukey Algorithm (Fast Fourier Transform)</div>
        <div className="algorithm-card">Closest Pair of Points</div>
        <div className="algorithm-card">Karatsuba Algorithm (Integer Multiplication)</div>
        <div className="algorithm-card">Rabin-Karp Algorithm (String Matching)</div>
        <div className="algorithm-card">Polynomial Multiplication</div>
        <div className="algorithm-card">Randomized Selection</div>
        <div className="algorithm-card">Quickselect</div>
        <div className="algorithm-card">Fast Fourier Transform (FFT)</div>
        <div className="algorithm-card">Blum-Blum-Shub Algorithm (Pseudorandom Number Generation)</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default DivideAndConquerAlgorithms;
