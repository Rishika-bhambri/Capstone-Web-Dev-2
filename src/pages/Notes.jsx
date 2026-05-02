import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim().length < 3) return;
    setNotes([...notes, { id: Date.now(), content: text }]);
    setText("");
  };

  return (
    <div style={{ padding: '30px', color: 'white' }}>
      <h1>Smart Notes</h1>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '100px', borderRadius: '8px', padding: '10px' }}
        placeholder="Write your brilliant ideas..."
      />
      <button onClick={addNote} style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>Save Note</button>
      
      <div style={{ marginTop: '20px' }}>
        {notes.map(n => (
          <div key={n.id} style={{ background: '#333', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
            {n.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;