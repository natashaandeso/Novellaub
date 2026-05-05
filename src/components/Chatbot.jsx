import React, { useState } from 'react';
import { chatData } from './ChatData'; // Import the data we just made

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Add User Message to UI
    const userMsg = { text: input, sender: 'user' };
    
    // 2. Find Response
    const lowerInput = input.toLowerCase();
    
    // Check our "Brain" for a match
    const match = chatData.find(item => 
      item.keywords.some(keyword => lowerInput.includes(keyword))
    );

    const botResponse = match 
      ? match.response 
      : "I'm not sure about that story yet, but I'm learning! Try asking for a romance or a mystery. 📚";

    const botMsg = { text: botResponse, sender: 'bot' };

    setMessages([...messages, userMsg, botMsg]);
    setInput(""); // Clear input
  };

  return (
    <div className="chatbot-container p-3 shadow rounded bg-white">
      <div className="chat-display mb-2" style={{height: '250px', overflowY: 'auto'}}>
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 my-1 rounded ${msg.sender === 'user' ? 'bg-primary text-white text-end' : 'bg-light text-dark'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="d-flex">
        <input 
          className="form-control" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for a story..."
        />
        <button className="btn btn-primary ms-2" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;