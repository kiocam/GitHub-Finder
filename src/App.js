import React from 'react'
import Navbar from './components/layouts/Navbar'
import './App.css'

class App extends React.Component {
  render() {
    const name = 'john doe'
    return (
      <div className="App">
        <Navbar />
      </div>
    )
  }
}

export default App
