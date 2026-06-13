import React from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/sidebar'

const App = () => {
  return (
    <div className="flex animate-fadeIn duration-1000">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
