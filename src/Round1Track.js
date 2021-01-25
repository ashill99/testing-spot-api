import React from 'react'
import './index.css'


function Round1Track({track, onRoundWinner}) {

return (
    <div id={track.id} className="bracket-box" onClick={onRoundWinner}>
        <h3 id={track.id}>{track.name}</h3>
        <h3 id={track.id}>{track.artists}</h3>
    </div>
)

}

export default Round1Track