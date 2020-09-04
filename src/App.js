import React from "react";
import requests from "./requests";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <Row
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
        title="Netflix Originals"
      ></Row>
      <Row fetchUrl={requests.fetchTrending} title="Trending Now"></Row>
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated"></Row>
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies"></Row>
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies"></Row>
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies"></Row>
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies"></Row>
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries"></Row>
    </div>
  );
}

export default App;
