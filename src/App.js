import React from 'react'
import Row from './Row'
import request from "./request"
import Banner from './Banner'
import "./App.css"
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchurl={request.Orginal} />
      <Row isLarge={true} title="NETFLIX ORIGINAL" fetchurl={request.Orginal} />
      <Row title="Trending Now" fetchurl={request.Trending} />
      <Row title="Top Rated" fetchurl={request.Top_rated} />
      <Row title="Action Movies" fetchurl={request.Action} />
      <Row title="Comedy Movies" fetchurl={request.Comedy} />
      <Row title="Horror Movies" fetchurl={request.Horror} />
      <Row title="Romantic Movies" fetchurl={request.Romance} />
      <Row title="Documentaries Movies" fetchurl={request.Documentaries} />
    </div>
  );
}

export default App