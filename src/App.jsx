import React from 'react';
import ImageUploader from './ImageUploader';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-section">
        <header className="hero">
          <h1>Image Upload Platform</h1>
          <p className="subtitle">Upload your creative works to our gallery</p>
        </header>
        <footer className="footer">
          <p>© 2024 Image Upload Platform. All rights reserved.</p>
        </footer>
      </div>
      <main className="main-content">
        <ImageUploader />
      </main>
    </div>
  );
}

export default App; 