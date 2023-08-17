// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>The Word</h1>
      <div className="home-description">
        <p>Welcome to "The Word", a comprehensive platform dedicated to providing you with an intuitive way to explore the sacred scriptures.</p>
        <p>Whether you're on a spiritual journey, studying for academic purposes, or just curious, our app gives you access to a rich collection of religious texts. Navigate through books, chapters, and individual verses to find the passages that resonate with you.</p>
        <p>With a user-friendly interface and a wealth of content, "The Word" is your go-to app for biblical exploration. Dive in and discover the wisdom that has inspired countless generations.</p>
      </div>
      <Link to="/bibles" className="bibles-link">Browse Bibles</Link>
    </div>
  );
}

export default Home;
