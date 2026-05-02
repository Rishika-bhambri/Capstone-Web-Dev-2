import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';


const Home = () => <div style={{padding: '20px'}}><h1>Welcome to AI Dashboard</h1><p>Smart suggestions coming soon!</p></div>;
import Tasks from './pages/Tasks';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;