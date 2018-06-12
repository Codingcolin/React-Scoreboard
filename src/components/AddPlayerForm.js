import React from 'react'

const AddPlayerForm = () => {
  return (
    <div className="add-player-form">
      <form>
        <input value="" placeholder="Player Name" type="text" />
        <input value="Add Player" type="submit" />
      </form>
    </div>
  )
}

export default AddPlayerForm
