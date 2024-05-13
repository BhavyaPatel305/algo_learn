import React from 'react';
import { Link } from 'react-router-dom';
import './GraphAlgo.css'; // Assume you have a shared CSS file for category pages

const GraphAlgorithms = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Graph Algorithms</h2>
      <div className="algorithm-list">
        <div className="algorithm-card">Shortest Path Algorithms (Dijkstra's, Bellman-Ford, A*, Floyd-Warshall)</div>
        <div className="algorithm-card">Minimum Spanning Tree Algorithms (Kruskal's, Prim's)</div>
        <div className="algorithm-card">Topological Sort</div>
        <div className="algorithm-card">Strongly Connected Components</div>
        <div className="algorithm-card">Graph Traversal Algorithms (DFS, BFS)</div>
        <div className="algorithm-card">Eulerian Circuit/Path</div>
        <div className="algorithm-card">Hamiltonian Cycle</div>
        <div className="algorithm-card">Network Flow Algorithms (Ford-Fulkerson, Edmonds-Karp)</div>
        <div className="algorithm-card">Bipartite Matching</div>
        <div className="algorithm-card">Maximum Clique Problem</div>
        <div className="algorithm-card">Graph Coloring Algorithms</div>
        <div className="algorithm-card">Tarjan's Algorithm (Articulation Points and Bridges)</div>
        <div className="algorithm-card">Hopcroft-Karp Algorithm (Bipartite Matching)</div>
      </div>
      <Link to="/" className="back-button">Back to Homepage</Link>
    </div>
  );
};

export default GraphAlgorithms;
