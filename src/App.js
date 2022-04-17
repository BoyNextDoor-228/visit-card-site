import React from 'react'
import MainWindow from './components/MainWindow'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <MainWindow/>
      </BrowserRouter>
  )
}

export default App;