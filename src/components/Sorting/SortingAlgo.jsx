import React from 'react';
import './SortingAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const SortingAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Sorting Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Bubble Sort</div>
        <div className="algorithm-card">Insertion Sort</div>
        <div className="algorithm-card">Selection Sort</div>
        <div className="algorithm-card">Merge Sort</div>
        <div className="algorithm-card">Quick Sort</div>
        <div className="algorithm-card">Heap Sort</div>
        <div className="algorithm-card">Shell Sort</div>
        <div className="algorithm-card">Radix Sort</div>
        <div className="algorithm-card">Bucket Sort</div>
        <div className="algorithm-card">Counting Sort</div>
        <div className="algorithm-card">Timsort</div>
        <div className="algorithm-card">Intro Sort</div>
        <div className="algorithm-card">Patience Sorting</div>
        <div className="algorithm-card">Bead Sort</div>
        <div className="algorithm-card">Pancake Sort</div>
        <div className="algorithm-card">Spaghetti Sort</div>
        <div className="algorithm-card">Flashsort</div>
        <div className="algorithm-card">Odd-Even Sort</div>
        <div className="algorithm-card">Bitonic Sort</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default SortingAlgorithms;
