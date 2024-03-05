import React,{useState,useEffect} from 'react'
import axios from "./axios"
import "./row.css"
import Youtube from"react-youtube"
import movieTrailer from "movie-trailer"

function Row({title,fetchurl,isLarge}) {
  const image_base="https://image.tmdb.org/t/p/original"
    let [movies,setmovies]=useState([])
    let [trailerUrl,setTrailerUrl]=useState("")
    useEffect(() => {
      axios
        .get(fetchurl)
        .then((response) => response.data.results)
        .then((res) => {
          setmovies(res);
        });
    }, [fetchurl]);
    function handleClick(movie){
      // console.log("clicked")
      if(trailerUrl){
        setTrailerUrl("")
      } else{

        movieTrailer(movie?.title||movie?.name||movie?.original_name).then((url)=>{
          const urlParams=new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"));
        }).catch((error)=>console.log(error))
      }

    }
const opts={
  height:"390",
  width:"100%",
  playerVars:{
    autoplay:1
  }
}

    //  console.log(movies);
  return (
    <div className='row'>
    <h1>{title}</h1>
    <div className='row_posters'>
        {
            movies?.map((movie,i)=>{
                let ren = (
                  <img onClick={()=>{handleClick(movie)}}
                    key={i}
                    className={`row_poster ${isLarge ? "isLarge" : ""}`}
                    src={`${image_base}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                  />
                );
                return ren
            })
        }
    </div>
    <div style={{padding:"40px"}}>
      {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
    </div>
  )
}

export default Row