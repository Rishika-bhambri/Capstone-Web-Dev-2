import { LayoutDashboard, CheckSquare, StickyNote, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ width: '250px', background: '#f4f4f43a', height: '100vh', padding: '20px' }}>
      <h2>Index</h2>
      <br>
      </br>
      <br>
      </br>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/"><LayoutDashboard size={20} /> Dashboard</Link>
        <br>
        </br>
        <Link to="/tasks"><CheckSquare size={20} /> Tasks</Link>
        <br>
        </br>
        <Link to="/notes"><StickyNote size={20} /> Notes</Link>
      </nav>
    </div>
  );
};

export default Sidebar;