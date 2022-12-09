import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Result, RootObject, Info, params } from "../../types/data";


export interface dataState {
  isLoading: boolean;
  status: null | string;
  data: Array<RootObject>;
  results: Array<Result>;
  info: Array<Info> | any;
  episode: Array<string>;
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  data: [],
  results: [],
  info: [],
  episode: [],
};

export const fetchCharacterData: any = createAsyncThunk(
  "dataSlice/fetchCharacterData",

  async ({ page, data }: params) => {
    data = axios.get("https://rickandmortyapi.com/api/character", {
      params: {
        page,
      },
    });

    return data;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //all characters
    builder.addCase(fetchCharacterData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacterData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.results = action.payload.data.results;
      state.info = action.payload.data.info;
      state.episode = action.payload.data.results.map((episode:Result) => episode.episode);
    });

  },
});

// Action creators are generated for each case reducer function

// export const { page } = dataSlice.actions;

export default dataSlice.reducer;
