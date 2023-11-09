import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Arena from './pages/ArenaPage.jsx';
import './index.css';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import LoginPage from './pages/LoginPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <NavBar />
      <Routes>
        <Route path="/pages/LoginPage" element={<LoginPage />} />
        <Route path="/" element={<App />} />
        <Route path="/pages/ArenaPage" element={<Arena />} />
      </Routes>
      <Footer year={new Date().getFullYear()} />
    </React.StrictMode>
  </Router>
);
