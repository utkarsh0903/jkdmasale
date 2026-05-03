import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Notes from './pages/Notes'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Simple routing
  if (currentPage === 'notes') {
    return <Notes />
  }

  return <Home />
}

export default App
