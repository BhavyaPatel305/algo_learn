import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import SearchingAlgo from './components/Searching/SearchingAlgo';
import SortingAlgo from './components/Sorting/SortingAlgo';
import GraphAlgo from './components/Graph/GraphAlgo';
import DynamicProgrammingAlgo from './components/DynamicProgramming/DynamicProgrammingAlgo';
import GreedyAlgo from './components/Greedy/GreedyAlgo';
import DivideAndConquerAlgo from './components/DivideAndConquer/DivideAndConquerAlgo';
import RecursionBasedAlgo from './components/RecursionBasedAlgorithms/RecursionBasedAlgo';
import HashingAlgo from './components/Hashing/HashingAlgo';
import RandomizedAlgo from './components/RandomizedAlgorithms/RandomizedAlgo';
import ApproximationAlgo from './components/ApproximationAlgorithms/ApproximationAlgo';
import NumericAlgo from './components/NumericAlgorithms/NumericAlgo';
import CryptographicAlgo from './components/CryptographicAlgorithms/CryptographicAlgo';
import GeometricAlgo from './components/GeometricAlgorithms/GeometricAlgo';
import StringAlgo from './components/StringAlgorithms/StringAlgo';
import OptimizationAlgo from './components/OptimizationAlgorithms/OptimizationAlgo';
import LinearSearch from './components/Searching/LinearSearch/LinearSearch';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/searching-algorithms" element={<SearchingAlgo />} />
        <Route path="/sorting-algorithms" element={<SortingAlgo />} />
        <Route path="/graph-algorithms" element={<GraphAlgo />} />
        <Route path="/dynamic-programming-algorithms" element={<DynamicProgrammingAlgo />} />
        <Route path="/greedy-algorithms" element={<GreedyAlgo />} />
        <Route path="/divide-and-conquer-algorithms" element={<DivideAndConquerAlgo />} />
        <Route path="/recursion-based-algorithms" element={<RecursionBasedAlgo />} />
        <Route path="/hashing-algorithms" element={<HashingAlgo />} />
        <Route path="/randomized-algorithms" element={<RandomizedAlgo />} />
        <Route path="/approximation-algorithms" element={<ApproximationAlgo />} />
        <Route path="/numeric-algorithms" element={<NumericAlgo />} />
        <Route path="/cryptographic-algorithms" element={<CryptographicAlgo />} />
        <Route path="/geometric-algorithms" element={<GeometricAlgo />} />
        <Route path="/string-algorithms" element={<StringAlgo />} />
        <Route path="/optimization-algorithms" element={<OptimizationAlgo />} />
        <Route path="/searching-algorithms/linear-search" element={<LinearSearch />} />
        

        
        
        {/* Add more routes for other sections if needed */}
      </Routes>
    </Router>
  );
};

export default App;
