import { Character } from "@/types/characters";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  characters: Character[];
  pageCount: number;
  page: number;
}

const initialState: InitialState = {
  characters: [],
  pageCount: 1,
  page: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharactersData: (state, action) => {
      state.characters = action.payload.character;
      state.pageCount = Math.ceil(action.payload.count / 10);
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const { setCharactersData, setPage } = charactersSlice.actions;
export default charactersSlice.reducer;
