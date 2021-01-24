import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string';


function App() {

  const [userData, setUserData] = useState('')
  const [trackData, setTrackData] = useState('')
  

useEffect(() => {
  // let parsed = queryString.parse(window.location.search)
  let accessToken = 'BQBPwxg5UoLEaF0EZTNP8xeoaeiobSRopAXI4Aht-SyMDKy5iwX6oEteObIUO4RvDB-znmymfl4EM9sJvFvFoL2-8UUq5CGFxbCCfucSywyzRHeonHwHlt4Q-2AXTJFNka0DFMpoJXsBQRo_atmhNgPy81io' 
  // console.log(parsed)
  console.log(accessToken)

  fetch('https://api.spotify.com/v1/me', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
  .then(response => response.json())
  .then(setUserData)
},[])

// useEffect(() => {
//   // let parsed = queryString.parse(window.location.search)
//   let accessToken = 'BQBPwxg5UoLEaF0EZTNP8xeoaeiobSRopAXI4Aht-SyMDKy5iwX6oEteObIUO4RvDB-znmymfl4EM9sJvFvFoL2-8UUq5CGFxbCCfucSywyzRHeonHwHlt4Q-2AXTJFNka0DFMpoJXsBQRo_atmhNgPy81io' 
//   // console.log(parsed)
//   console.log(accessToken)

//   fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
//     headers: {'Authorization': 'Bearer ' + accessToken}
//   })
//   .then(response => response.json())
//   .then(setTrackData)
// },[])

// console.log(userData)
// console.log(trackData)

// const eachTrack = trackData.tracks.items.map((track) => {
//   return ( <div>
//         {track.name}
//   </div>
//   )
// })

  return (
    <div className="App">
      <header className="App-header">
        <p>
Testing this Spotify code 
        </p>
        <p>
          {userData.display_name}
          </p>
          <p>
          {trackData.name}  
        </p>


      </header>
    </div>
  );
}

export default App;
