import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        TrailerVideo:null,
        popularMovies:null,
    },
    reducers:{
      addNowPlaying:(state,action)=>{
        state.nowPlaying = (action.payload);
      },
      addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
      },
      addTrailerVideo:(state,action)=>{
        state.TrailerVideo = action.payload;
      }
    }
})

export const {addNowPlaying,addPopularMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;