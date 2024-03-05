const API_KEY = "0da4b0a42a2d9ad1c572b5f84cb6d3d5";
const Api = {
  Orginal: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  Comedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  Action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  Horror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  Romance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Trending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  Top_rated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Documentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`
};
export  default Api

