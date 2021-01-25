import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import SpotifyWebApi from './spotify-web-api'
import './App.css';
import queryString from 'query-string';
import './index.css'
import Round1Track from './Round1Track'
import Round2Track from './Round2Track'


function App() {

// const [searchData, setSearchData] = useState('')
// const [searchField, setSearchField] = useState('')
const [searchArtist, setSearchArtist] = useState('')
const [round1Track, setRound1Track] = useState([])
const [round1Array, setRound1Array] = useState([])
const [round2Array, setRound2Array] = useState([])

  // var spotifyApi = new SpotifyWebApi();

  const accessToken = 'BQD_Ok7Nxg1YmvCWSRCvkPFbfTsO_pSUoAYV5ymkrFuI-NQXCfrppGrERFYQmzlv1oGBzSATmu6HBiBJDiwBFG62LBtpzQLDwD8IpC-S5FCkR1TSlxIOhSFjv8wyUZ9IzoSuhMU4rhgY3jVF8btGLg3Ub6Jx'

  // spotifyApi.setAccessToken('BQArYZzbSWdXYv9HHwv73NdQbxZ4e3Jga2F1NWUZh-iQL2LGCeQTLYhdzampAbskmZKyUhnAiKQqLQL5-P23-iURm5M1PQCXYJw82E-OCLncxoK2SD3o1HjzQAYG492-G5G2rv5MSTAAfo5xfr50PatVNsbx');

  // useEffect(() => {
  // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
  //   if (err) console.error(err);
  //   else console.log('Artist albums', data);
  // })
  // },[])


  // search artists whose name contains 'Love'

//   useEffect(() => {
//     spotifyApi.searchArtists('Love').then(
//   function (data) {
//     console.log('Search artists by "Love"', data)
//     setSearchData(data);
//   },
//   function (err) {
//     console.error(err);
//   }
// )
// },[])

// useEffect(() => {
//     spotifyApi.searchArtists({searchField}).then(
//       function (data) {
//         data.artists.items.map((artist) => setSearchData([...searchData, artist.name]))
//       }
//     )
// },[])


// useEffect(() => {
//   spotifyApi.searchArtists({searchField}).then(
//     function (data) {
//     console.log(data)}
//   )
// },[])

// function newSearchArtist(artist) {
//   spotifyApi.searchTracks(artist).then(
//     function (data) {
//     setSearchData(data)}
//   )
// }

// spotifyApi
//   .getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
//   .then(function (data) {
//     return data.tracks.map(function (t) {
//       return t.id;
//     });
//   })
//   .then(function (trackIds) {
//     return spotifyApi.getTracks(trackIds);
//   })
//   .then(function (tracksInfo) {
//     console.log(tracksInfo);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// useEffect(() => {
// const eachTrack = searchData.items.map((track) => { 
//   return {
//     name: track.name
//     imageUrl: item.images[0].url 
//   })
// },[setSearchData])


function searchForTrack(searchTerm) {
  fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=8`, {
    headers: {'Authorization': 'Bearer ' + accessToken}
      })
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      if (!jsonResponse.tracks) {
        return [];
      }
      const newDetails =  jsonResponse.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artists: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        image: track.album.images[0].url
      }));
      setSearchArtist(newDetails)
    });
}

const firstTrack = searchArtist[0]
const secondTrack = searchArtist[1]
const thirdTrack = searchArtist[2]
const fourthTrack = searchArtist[3]
const fifthTrack = searchArtist[4]
const sixthTrack = searchArtist[5]
const seventhTrack = searchArtist[6]
const eighthTrack = searchArtist[7]

function handleChoiceClick(e) {
  console.log(e.target.id)
  const track = searchArtist.filter((track) => track.id === e.target.id)
  console.log(track[0])
  const newTrackDetails = {
    name: track[0].name,
    id: track[0].id,
    album: track[0].album,
    artists: track[0].artists,
    uri: track[0].uri,
    image: track[0].image
  }
  console.log(newTrackDetails)
  setRound1Track(newTrackDetails)
  console.log(round1Track)
  if (round1Array.length < 8) {
  setRound1Array([...round1Array, newTrackDetails])
  }
  // setRound1Track(track)
  console.log(round1Array.length)
  console.log(round1Array)

}



function handleRound1Winner(e) {
  console.log(e.target.id)
  const track = searchArtist.filter((track) => track.id === e.target.id)
  console.log(track[0])
  const newTrackDetails = {
    name: track[0].name,
    id: track[0].id,
    album: track[0].album,
    artists: track[0].artists,
    uri: track[0].uri,
    image: track[0].image
  }
  console.log(newTrackDetails)
  // setRound2Track(newTrackDetails)
  if (round2Array.length < 5) {
  setRound2Array([...round2Array, newTrackDetails])
  }
console.log(round2Array)
}

function returnTheTrack(track) {
  return (
    // <div id={track.id} onClick={(e) => {setRound1Track(track)}}>

    <div id={track.id} track={track} onClick={handleChoiceClick}>
      <h2 id={track.id}>{track.name}</h2>
      <p id={track.id}>Artist: {track.artists}</p>
      <p id={track.id}>Album: {track.album}</p>
      <img src={track.image} height="100" id={track.id}></img>

    </div>
  )
}
const eachRound1Track = round1Array.map((track) => {
  if (round1Array.length < 9) { return (
    <Round1Track track={track} onRoundWinner={handleRound1Winner}/>
  )}
})

const eachRound2Track = round2Array.map((track) => {
  if (round2Array.length < 5) { return (
    <Round2Track track={track} />
  )}
})

// const newArtist = searchArtist.map((song) => console.log(song.name))
console.log(searchArtist)
// console.log(searchData)
// console.log(searchField)

// console.log(searchData)
  // const [userData, setUserData] = useState('')
  // const [trackData, setTrackData] = useState('')
  

// useEffect(() => {
//   // let parsed = queryString.parse(window.location.search)
//   let accessToken = 'BQA1yZZ3_PpNWJ8nx1C7svBCp8sPI2TMr62EvgA_0E3UhZccGdyZdYisrX2UYycwTM_dHVCrZHWcgK8wPVXDUcqQtMhxWJ7vpMe3jqP-uu1AEx_Veg5Y3imimkydrufMU5fm6nea4zYUS8zb5b8d-uyTCP9L' 
//   // console.log(parsed)
//   // console.log(accessToken)

//   fetch('https://api.spotify.com/v1/me', {
//     headers: {'Authorization': 'Bearer ' + accessToken}
//   })
//   .then(response => response.json())
//   .then(setUserData)
// },[])

// useEffect(() => {
//   // let parsed = queryString.parse(window.location.search)
//   let accessToken = 'BQCAtSb9tU31GkAe_kZ9F4-_YtoFsSEhNjlJAtWQ2_Xra6-R4SyU64DJjzByPp9EQ-JqVOOETk-jl8lnjC5PQL2SPleG--fSHVKzHShc6AGlDiklaP-DAmG2AknK93MqpsiaS3mDyUuLxC0m1A' 
//   // console.log(parsed)
//   console.log(accessToken)

//   fetch("https://api.spotify.com/v1/me/top/tracks/", {
//     headers: {'Authorization': 'Bearer ' + accessToken}
//   })
//   .then(response => response.json())
//   .then(setTrackData)
//   .catch(error => console.log(error))
// },[])

// console.log(userData)
// console.log(trackData)

// console.log(trackData.items)


// const eachTrack = trackData.items.map((track) => track.name)
console.log(round1Track) 
console.log(round1Array[0])


function renderFirstBracketSongs(track) {
  return (
    <div id={track.id} track={track} onClick={handleChoiceClick}>
      <h2 id={track.id}>{track.name}</h2>
      <p id={track.id}>Artist: {track.artists}</p>
      <p id={track.id}>Album: {track.album}</p>
      <img src={track.image} height="100" id={track.id}></img>
    </div>
  )
}

console.log(round2Array)

function handleNewSearch(e) {
e.preventDefault()
console.log(e.target.value)
// setSearchField(e.target.value)
searchForTrack(e.target.value)
}
  return (
    <div className="App">
      <header className="App-header">
        <p>
Testing this Spotify code 
        </p>
        <form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Search Artists..."
          onChange={handleNewSearch}
        />
      </form>        <p>
          {/* {userData.display_name} */}
          </p>
          <div className="container">
          {firstTrack ? returnTheTrack(firstTrack) : null}
          {secondTrack ? returnTheTrack(secondTrack) : null}
          {thirdTrack ? returnTheTrack(thirdTrack) : null}
          {fourthTrack ? returnTheTrack(fourthTrack) : null}
          {fifthTrack ? returnTheTrack(fifthTrack) : null}
          {sixthTrack ? returnTheTrack(sixthTrack) : null}
          {seventhTrack ? returnTheTrack(seventhTrack) : null}
          {eighthTrack ? returnTheTrack(eighthTrack) : null}
        </div>
        <div> 
          {round1Track ?
          <div>
           <h1>Picked Track: {round1Track.name}</h1>
           <p> Artist: {round1Track.artists}</p></div>
           : null}
        </div>
            <div className="container-bracket-box">
              <div className="bracket-box">
                {/* {round1Track ? renderFirstBracketSongs(round1Track) : null} */}
              </div>
              {eachRound1Track}
              {/* <div className="bracket-box">{renderFirstBracketSongs(round1Array[0])}</div> */}
              {/* <div className="bracket-box"></div>
              <div className="bracket-box"></div>
              <div className="bracket-box"></div>
              <div className="bracket-box"></div>
              <div className="bracket-box"></div>
              <div className="bracket-box"></div> */}

            </div>

            <div className="round-two-box">
            {eachRound2Track}
              {/* {eachRound2Track} */}
            </div>
      </header>
    </div>
  );
}

export default App;
