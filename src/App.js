import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page1 from './components/pages/page1';
import './App.css'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/">Member #1</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;