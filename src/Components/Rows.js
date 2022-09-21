import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../axiosInstance";
import "../styles/Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs on a specific condition/variable

  useEffect(() => {
    // if [],run once when the row loads, and dont run again

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https:developers.google.com/youtube/player_parameter
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log("Movie Name: ", movie);
      console.log("Movie Year: ", parseInt(movie.first_air_date.split("-")[0]));
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          console.log("Movie Trailer: ", url);
          // https:www.youtube.com/watch?v=XtMThy8QKqU&banana=5
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* serval row_posters */}

        {movies?.map((movie) =>
          // ((isLargeRow && movie.poster_path) ||
          //   (!isLargeRow && movie.backdrop_path)) && (
          movie?.poster_path && movie?.backdrop_path ? (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ) : undefined
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default React.memo(Rows);
