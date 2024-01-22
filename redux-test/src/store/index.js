import { createSlice, configureStore } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});

export { store };
export const { addMovie } = movieSlice.actions;
