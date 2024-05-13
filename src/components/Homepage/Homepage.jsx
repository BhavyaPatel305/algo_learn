import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const categories = [
    {
      name: 'Searching Algorithms',
      path: '/searching-algorithms'
    },
    {
      name: 'Sorting Algorithms',
      path: '/sorting-algorithms'
    },
    {
      name: 'Graph Algorithms',
      path: '/graph-algorithms'
    },
    {
      name: 'Dynamic Programming Algorithms',
      path: '/dynamic-programming-algorithms'
    },
    {
      name: 'Greedy Algorithms',
      path: '/greedy-algorithms'
    },
    {
      name: 'Divide and Conquer Algorithms',
      path: '/divide-and-conquer-algorithms'
    },
    {
      name: 'Recursion-based Algorithms',
      path: '/recursion-based-algorithms'
    },
    {
      name: 'Hashing Algorithms',
      path: '/hashing-algorithms'
    },
    {
      name: 'Randomized Algorithms',
      path: '/randomized-algorithms'
    },
    {
      name: 'Approximation Algorithms',
      path: '/approximation-algorithms'
    },
    {
      name: 'Numeric Algorithms',
      path: '/numeric-algorithms'
    },
    {
      name: 'Optimization Algorithms',
      path: '/optimization-algorithms'
    },
    {
      name: 'Cryptographic Algorithms',
      path: '/cryptographic-algorithms'
    },
    {
      name: 'Geometric Algorithms',
      path: '/geometric-algorithms'
    },
    {
      name: 'String Algorithms',
      path: '/string-algorithms'
    }
  ];

  return (
    <div className="homepage">
      <h1>Welcome to AlgoLearn</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <Link key={index} to={category.path} className="category-box">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
