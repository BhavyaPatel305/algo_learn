import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose the Dracula style
import { Helmet } from 'react-helmet';

import './LinearSearch.css'; // Assume you have a shared CSS file for category pages

const LinearSearch = () => {
  const [darkMode, setDarkMode] = useState(false); // State variable for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add the 'dark-mode' class to the body when darkMode is true
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  const handleBackButton = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.classList.remove('dark-mode');
      window.history.back();
    } else {
      // Continue with the default back button behavior
      window.history.back();
    }
  };
  const pythonCode = `def linear_search(data, target):
  """
  Performs a linear search on a list to find the index of the target element.

  Args:
      data: The list to search through (your game scores).
      target: The element to search for (target score).

  Returns:
      The index of the target element if found, otherwise -1.
  """

  for i in range(len(data)):
    if data[i] == target:
      return i  # Target score found, return its index
  return -1  # Target score not found

# Example usage
game_scores = [50, 20, 85, 10, 90]
target_score = 85

result = linear_search(game_scores, target_score)

if result != -1:
  print("You scored", target_score, "points at index", result)
else:
  print("Score", target_score, "not found in your game history")`;

  return (
    <div className={`linear-search-page ${darkMode ? 'dark-mode' : ''}`}>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3793431891765309"
          crossorigin="anonymous"></script>
      </Helmet>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        <div className={`toggle ${darkMode ? 'toggle-on' : ''}`}>
          <div className="icons">
            <i className="far fa-sun"></i>
            <i className="fas fa-moon"></i>
          </div>
        </div>
      </div>
      <h1 className="page-title">Linear Search</h1>
      <div className="section-box">
        <h2 className="section-title">Linear Search: Definition Bhavya Patel</h2>
        <p>Linear Search is a fundamental searching algorithm used to locate a specific element within a list. It works by iterating through the list sequentially, comparing each element with the target element we're searching for.</p>
      </div>
      <div className="section-box">
        <h2 className="section-title">Understanding Linear Search with a Simple Example</h2>
        <p>Imagine you have a list of your favorite video game scores: <span className="highlight">[50, 20, 85, 10, 90]</span>. You want to find out if you scored <span className="highlight">85</span> points in your last game. Here's how Linear Search would work:</p>
        <ol>
          <li><strong>Start at the Beginning:</strong> You begin by examining the first score on your list (<span className="highlight">50</span>).</li>
          <li><strong>Compare Scores:</strong> If <span className="highlight">50</span> isn't your target score (<span className="highlight">85</span>), you move on to the second score (<span className="highlight">20</span>) and compare it with <span className="highlight">85</span>.</li>
          <li><strong>Continue Comparison:</strong> This comparison process continues until you either:
            <ul>
              <li><strong>Find a Match:</strong> You encounter the score <span className="highlight">85</span> on your list. In this case, you've successfully found your target score and can stop searching.</li>
              <li><strong>Reach the End:</strong> You reach the last score on your list (<span className="highlight">90</span>) without finding <span className="highlight">85</span>. This indicates that you didn't score <span className="highlight">85</span> in your last game.</li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="section-box">
        <h2 className="section-title">Animation Video</h2>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/tjdfxcd9hnQ"
            title="Animation Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section-box">
        <h2 className="section-title">Step-by-Step Breakdown in Python</h2>
        <SyntaxHighlighter language="python" style={dracula}>
          {pythonCode}
        </SyntaxHighlighter>
      </div>
      <div className="section-box">
        <h2 className="section-title">Explanation of the Code</h2>
        <p><strong>Define the Function:</strong> We define a function called <span className="highlight">linear_search</span> that takes two arguments: <span className="highlight">data</span> (the list to be searched, your game scores) and <span className="highlight">target</span> (the element we're searching for, the target score).</p>
        <p><strong>Iterate through the List:</strong> The function uses a <span className="highlight">for loop</span> to iterate through each score in the data list using the <span className="highlight">range(len(data))</span> function.</p>
        <p><strong>Compare Elements:</strong> Inside the loop, we compare the current score (<span className="highlight">data[i]</span>) with the target score (<span className="highlight">target</span>) using the <span className="highlight">==</span> operator.</p>
        <p><strong>Return Index if Found:</strong> If a match is found (<span className="highlight">data[i] == target</span>), the function immediately returns the current index <span className="highlight">i</span>. This signifies that the target score has been located at that specific index in the list.</p>
        <p><strong>Return -1 if Not Found:</strong> If the loop finishes iterating through the entire list without finding a match, the function returns <span className="highlight">-1</span>. This indicates that the target score is not present in the list.</p>
      </div>
      
      <div className="section-box">
        <h2 className="section-title">Time Complexity</h2>
        <p>Linear Search has a time complexity of <span className="highlight">O(n)</span> in the average and worst-case scenarios. This implies that the number of comparisons it performs grows proportionally with the size of the list (n) of game scores. In the worst case, where the target score is at the end of the list, it might need to compare with all scores.</p>
        <p>However, Linear Search boasts a best-case time complexity of <span className="highlight">O(1)</span>. This occurs when the target score is the very first score on your list, leading to a successful search in just one comparison.</p>
      </div>
      <div className="section-box">
        <h2 className="section-title">Quick Explanation Video</h2>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/246V51AWwZM"
            title="Quick Explanation Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section-box">
        <h2 className="section-title">Detailed Explanation Video</h2>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/C46QfTjVCNU"
            title="Detailed Explanation Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackButton}>Back</button>
      </div>
    </div>
  );
};

export default LinearSearch;
