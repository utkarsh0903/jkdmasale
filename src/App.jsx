import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Home from './pages/Home'
import Notes from './pages/Notes'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Simple routing
  if (currentPage === 'notes') {
    return (
      <>
        <Notes />
        <Analytics />
      </>
    )
  }

  return (
    <>
      <Home />
      <Analytics />
    </>
  )
}

export default App
