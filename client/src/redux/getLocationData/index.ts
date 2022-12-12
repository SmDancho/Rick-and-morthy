import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Result, RootObject, Info, params } from "../../types/data";


export interface dataState {
  isLoading: boolean;
  status: null | string;
  data: Array<RootObject>;
  Locationresults: Array<Result>;
  info: Array<Info> | any;
  episode: Array<string>;
}

const initialState: dataState = {
  isLoading: false,
  status: null,
  data: [],
  Locationresults: [],
  info: [],
  episode: [],
};

export const fetchLocationData: any = createAsyncThunk(
  "LocationSlice/fetchLocationData",

  async ({ page, data }: params) => {
    data = axios.get("https://rickandmortyapi.com/api/location", {
      params: {
        page,
      },
    });
    console.log(data)
    return data;
  }
);

export const LocationSlice = createSlice({
  name: "dataLocation",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //all characters
    builder.addCase(fetchLocationData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLocationData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.Locationresults = action.payload.data.results;
      state.info = action.payload.data.info;
      state.episode = action.payload.data.results.map((episode:Result) => episode.episode);
    });

  },
});

// Action creators are generated for each case reducer function

// export const { page } = dataSlice.actions;

export default LocationSlice.reducer;
