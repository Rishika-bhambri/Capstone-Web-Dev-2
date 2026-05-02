import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Tasks from './pages/Tasks';
import Notes from './pages/Notes';

// 1. Home Component (Dashboard Summary)
const Home = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#0e086611', minHeight: '100vh', flex: 1 }}>
      <h1 style={{ color: '#fffefe' }}>Productivity Dashboard</h1>
      <p style={{ color: '#666' }}>Welcome back! Here is your AI-powered overview.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <div style={{ flex: 1, background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#007bff' }}>Tasks Analysis</h3>
          <p>Monitor your daily objectives and deadlines.</p>
        </div>

        <div style={{ flex: 1, background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#ffc107' }}>Digital Brain</h3>
          <p>Capture ideas and link them with AI insights.</p>
        </div>
      </div>
    </div>
  );
};

// 2. Main App Function
function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}

// 3. Export (Yahi error aa raha tha)
export default App;