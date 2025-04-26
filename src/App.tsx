import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StyledComponentsPage from './pages/StyledComponentsPage';
import TailwindCSSPage from './pages/TailwindCSSPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/styled-components">Styled-Components</Link>
            </li>
            <li>
              <Link to="/tailwindcss">Tailwind CSS</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/styled-components" element={<StyledComponentsPage />} />
          <Route path="/tailwindcss" element={<TailwindCSSPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;