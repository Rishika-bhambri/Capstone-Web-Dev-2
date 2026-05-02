import { LayoutDashboard, CheckSquare, StickyNote, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ width: '250px', background: '#f4f4f4', height: '100vh', padding: '20px' }}>
      <h2>AI Dash</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/"><LayoutDashboard size={20} /> Dashboard</Link>
        <Link to="/tasks"><CheckSquare size={20} /> Tasks</Link>
        <Link to="/notes"><StickyNote size={20} /> Notes</Link>
      </nav>
    </div>
  );
};

export default Sidebar;