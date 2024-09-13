import { Character } from "@/types/characters";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  characters: Character[];
  pageCount: number;
  page: number;
  character: Character;
}

const initialState: InitialState = {
  characters: [],
  pageCount: 1,
  page: 1,
  character: {
    birth_year: "",
    eye_color: "",
    films: [],
    gender: "",
    hair_color: "",
    height: "",
    homeworld: "",
    mass: "",
    name: "",
    skin_color: "",
    created: "",
    edited: "",
    species: [],
    starships: [],
    url: "",
    vehicles: [],
  },
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
    setCharacter: (state, action) => {
      state.character = action.payload.character;
    },
  },
});

export const { setCharactersData, setPage, setCharacter } =
  charactersSlice.actions;
export default charactersSlice.reducer;
