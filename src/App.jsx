import React from 'react'
import AppRouting from './routes/AppRouting'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppRouting/>
      </BrowserRouter>
    </div>
  )
}

export default App