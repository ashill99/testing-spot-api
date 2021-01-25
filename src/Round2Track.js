import React from 'react'
import './index.css'


function Round2Track({track}) {

return (
    <div id={track.id} className="bracket-box">
        <h3 id={track.id}>{track.name}</h3>
        <h3 id={track.id}>{track.artists}</h3>
    </div>
)

}

export default Round2Track