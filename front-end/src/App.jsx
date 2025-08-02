import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = [
    { name: 'Home', icon: '🏠' },
    { name: 'Discover', icon: '🔍' },
    { name: 'Post', icon: '➕' },
    { name: 'Notifications', icon: '🔔' },
    { name: 'Profile', icon: '👤' }
  ];

  return (
    <div className="app-container">
      <div className="screen-content">
        <h1>{activeTab}</h1>
        <p>This is the <strong>{activeTab}</strong> screen.</p>
      </div>

      <nav className="bottom-nav">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`nav-button ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span className="icon">{tab.icon}</span>
            <span className="label">{tab.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
