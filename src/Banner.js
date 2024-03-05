import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./banner.css";

function Banner({ fetchurl }) {
  const image_base = "https://image.tmdb.org/t/p/original";
  let [movie, setmovie] = useState([]);
  useEffect(() => {
    axios
      .get(fetchurl)
      .then((response) => response.data.results)
      .then((res) => {
        
        setmovie(res[Math.floor(Math.random() * res.length)])
        
        // console.log(res)
        
      });
  }, []);
   function truncate(str, max) {
     return str?.length > max ? str.substr(0, max - 1) + "…" : str;
   }

  return (
    <div
      className="All"
      style={{ backgroundImage: `url(${image_base}${movie.backdrop_path})` }}
    >
      <div className="info">
        <h1 className="movie_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <button>Play</button>
        <button>My List</button>
        <div className="banner_discription">
          {truncate(movie.overview, 150)}
        </div>
      </div>
      <div className="fade_banner" />
    </div>
  );
}

export default Banner;
