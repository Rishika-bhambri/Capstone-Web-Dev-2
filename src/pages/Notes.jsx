import React, { useState } from 'react';
import { StickyNote, Plus, Trash2 } from 'lucide-react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    // Basic validation: 3 letters se kam note save nahi hoga 
    if (text.trim().length < 3) return;
    
    setNotes([...notes, { id: Date.now(), content: text }]);
    setText(""); // Input clear karne ke liye
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <StickyNote color="#ffd700" /> Smart Notes
      </h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your idea here..."
          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
        />
        <button onClick={addNote} style={{ padding: '10px 20px', background: '#ffd700', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          <Plus />
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
        {notes.map(n => (
          <div key={n.id} style={{ background: '#fff9c4', padding: '15px', borderRadius: '10px', position: 'relative', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <p>{n.content}</p>
            <button onClick={() => deleteNote(n.id)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}>
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;