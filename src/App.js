import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
// import requests from "./requests";
// import Row from "./Rows";
// import Banner from "./Banner";
// import "./Banner.css";
// import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" ex element={<LoginScreen />} /> */}
        <Route path="/" element={<HomeScreen />} />
      </Routes>

      {/* <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} /> */}
    </div>
  );
}

export default App;
