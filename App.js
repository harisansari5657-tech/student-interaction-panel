import React, { useState, useEffect } from 'react';

const StudentInteractionPanel = () => {
  // 1. Login Status State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Click Counter State
  const [count, setCount] = useState(0);

  // 3. Theme Switcher State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 5. Simple Feedback Input State
  const [feedback, setFeedback] = useState("");

  // 4. Component Load Message (Runs only once on mount)
  useEffect(() => {
    console.log("Component Loaded");
  }, []); 

  // Dynamic Styles
  const appStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    padding: '40px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    transition: '0.3s'
  };

  const sectionStyle = {
    border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    maxWidth: '500px'
  };

  return (
    <div style={appStyle}>
      <h1>Student Interaction Panel</h1>

      {/* 1. Login Status Section */}
      <div style={sectionStyle}>
        <h3>1. Authentication</h3>
        <p>{isLoggedIn ? "User Logged In" : "User Logged Out"}</p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {/* 2. Click Counter Section */}
      <div style={sectionStyle}>
        <h3>2. Interaction Counter</h3>
        <p>Total Clicks: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>

      {/* 3. Theme Switcher Section */}
      <div style={sectionStyle}>
        <h3>3. Appearance</h3>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* 5. Feedback Input Section */}
      <div style={sectionStyle}>
        <h3>4. Feedback</h3>
        <input 
          type="text" 
          placeholder="Type something..." 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={{ padding: '5px', width: '80%' }}
        />
        <p><strong>Live Preview:</strong> {feedback}</p>
      </div>
    </div>
  );
};

export default StudentInteractionPanel;
