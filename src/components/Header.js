import React from 'react'
import Stats from './Stats'

const Header = () => {
  return (
    <div className="header">
      <Stats />
      <h1>Scoreboard</h1>
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time"> 0 </div>
        <button>Start</button>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default Header
