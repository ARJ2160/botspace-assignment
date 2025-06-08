import { useState } from 'react'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
    </div>
  )
}

export default App
