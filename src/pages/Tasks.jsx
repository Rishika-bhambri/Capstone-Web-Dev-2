import React, { useState, useEffect } from 'react'; 
import { Trash2, Plus } from 'lucide-react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]); // Khali array rakha hai kyunki data LocalStorage se aayega
    const [newTask, setNewTask] = useState("");
    const [suggestion, setSuggestion] = useState("Hello! Add some tasks to get AI insights.");

    // --- LOCAL STORAGE LOGIC (Andar hona chahiye) ---

    // 1. Load Data: Jab page pehli baar khulega
    useEffect(() => {
        const savedTasks = localStorage.getItem('my-tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []); // Khali array [] matlab sirf "On Mount" chalega

    // 2. Save Data: Jab bhi 'tasks' change honge
    useEffect(() => {
        localStorage.setItem('my-tasks', JSON.stringify(tasks));
        
        // AI Logic bhi isi ke saath update hoga
        if (tasks.length === 0) {
            setSuggestion("No tasks yet! Try adding something to see smart suggestions.");
        } else {
            const hasUrgentTask = tasks.some(t =>
                t.text.toLowerCase().includes("urgent") || t.text.toLowerCase().includes("important")
            );
            if (hasUrgentTask) {
                setSuggestion("⚠️ Priority Alert: You have urgent tasks! Focus on them first.");
            } else if (tasks.length > 5) {
                setSuggestion("🔥 Pro Tip: List is getting long. Consider breaking tasks into smaller chunks.");
            } else {
                setSuggestion("✅ Everything looks under control. Good job!");
            }
        }
    }, [tasks]); 

    // --- FUNCTIONS ---
    const addTask = () => {
        if (newTask.trim() === "") return;
        const formattedText = newTask.charAt(0).toUpperCase() + newTask.slice(1).toLowerCase();
        const item = { id: Date.now(), text: formattedText, completed: false };
        setTasks([...tasks, item]);
        setNewTask(""); 
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div style={{ padding: '30px', maxWidth: '600px' }}>
            <h2>Smart Task Manager</h2>
            <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '10px', marginBottom: '20px', borderLeft: '5px solid #2196f3' }}>
                <strong>🤖 AI Assistant:</strong>
                <p style={{ margin: '5px 0 0', color: '#1565c0' }}>{suggestion}</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Type 'urgent' to test AI..."
                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button onClick={addTask} style={{ background: '#007bff', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>
                    <Plus size={20} />
                </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {tasks.map((task) => (
                    <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
                        <span>{task.text}</span>
                        <button onClick={() => deleteTask(task.id)} style={{ color: 'red', border: 'none', background: 'none' }}>
                            <Trash2 size={18} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;