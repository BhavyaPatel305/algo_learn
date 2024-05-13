import React from 'react';
import './GeometricAlgo.css'; // Assume you have a shared CSS file for category pages
import { Link } from 'react-router-dom';

const GeometricAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Geometric Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Convex Hull Algorithms (Graham Scan, Jarvis March)</div>
        <div className="algorithm-card">Voronoi Diagram Algorithms</div>
        <div className="algorithm-card">Line Segment Intersection Algorithms</div>
        <div className="algorithm-card">Polygon Triangulation Algorithms</div>
        <div className="algorithm-card">Algorithms for Computational Geometry Problems</div>
        <div className="algorithm-card">Algorithms for Collision Detection</div>
        <div className="algorithm-card">Algorithms for Spatial Data Structures (Quadtrees, Octrees)</div>
        <div className="algorithm-card">Algorithms for Computational Topology</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default GeometricAlgorithms;
