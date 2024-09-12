import { Character } from "@/types/characters";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  characters: Character[];
  count: number;
  page: number;
}

const initialState: InitialState = {
  characters: [],
  count: 0,
  page: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharactersData: (state, action) => {
      state.characters = action.payload.character;
      state.count = action.payload.count;
    },
    setNextPage: (state) => {
      state.page += 1;
    },
    setPreviousPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { setCharactersData, setNextPage, setPreviousPage } =
  charactersSlice.actions;
export default charactersSlice.reducer;
