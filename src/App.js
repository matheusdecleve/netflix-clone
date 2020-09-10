import React from "react";
import requests from "./requests";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <>
        <Row
          isFirstRow
          fetchUrl={requests.fetchNetflixOriginals}
          title="Populares na Netflix"
        ></Row>
        <Row
          fetchUrl={requests.fetchActionMovies}
          title="Continuar assistindo como Matheus"
        ></Row>
        <Row fetchUrl={requests.fetchTrending} title="Em alta"></Row>
        <Row
          isLargeRow
          fetchUrl={requests.fetchTopRated}
          title="Top Rated"
        ></Row>
        <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies"></Row>
        <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies"></Row>
        <Row
          fetchUrl={requests.fetchRomanceMovies}
          title="Romance Movies"
        ></Row>
      </>
      <Footer />
    </>
  );
}

export default App;
