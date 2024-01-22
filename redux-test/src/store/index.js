import { createSlice, configureStore } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index,1);
    },
  },
});

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index,1);
    },
  },
});

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    songs: songSlice.reducer,
  },
});


export { store };
export const { addMovie, removeMovie } = movieSlice.actions;
export const { addSong, removeSong } = songSlice.actions;
