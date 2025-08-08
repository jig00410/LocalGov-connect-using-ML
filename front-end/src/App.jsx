// src/App.jsx
import { useState } from 'react'
import './App.css'
import Post from './components/Post' // ✅ Match the file name exactly

function App() {
  const [activeTab, setActiveTab] = useState('Home')

  const tabs = [
    { name: 'Home', icon: '🏠' },
    { name: 'Discover', icon: '🔍' },
    { name: 'Post', icon: '➕' },
    { name: 'Notifications', icon: '🔔' },
    { name: 'Profile', icon: '👤' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return <p>Welcome to LocalGov Connect!</p>
      case 'Discover':
        return <p>Explore issues around you.</p>
      case 'Post':
        return <Post /> // ✅ Use the component correctly
      case 'Notifications':
        return <p>No new notifications.</p>
      case 'Profile':
        return <p>Your profile details go here.</p>
      default:
        return <p>Unknown tab.</p>
    }
  }

  return (
    <div className="app-container">
      <div className="screen-content">
        <h1>{activeTab}</h1>
        {renderTabContent()}
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
  )
}

export default App
