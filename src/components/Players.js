import React from 'react'

const Players = () => {
  return (
    <div className="players">
      <div className="player">
        <div className="player-name">
          <a className="remove-player">✖</a> Jim Hoskins
        </div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement">-</button>
            <div className="counter-score"> 31 </div>
            <button className="counter-action increment">+</button>
          </div>
        </div>
      </div>
      <div className="player">
        <div className="player-name">
          <a className="remove-player">✖</a> Colin Jackson
        </div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement">-</button>
            <div className="counter-score"> 100 </div>
            <button className="counter-action increment">+</button>
          </div>
        </div>
      </div>
      <div className="player">
        <div className="player-name">
          <a className="remove-player">✖</a> Clincy Latimer
        </div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement">-</button>
            <div className="counter-score"> 58 </div>
            <button className="counter-action increment">+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Players
