import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios" 
import {Result,RootObject,Info} from "../../types/data"

export interface dataState {
  isLoading: boolean;
  status: null | string;
  data:Array<RootObject>;
  results:Array<Result>;
  info:Array<Info>;
  episode:string;
}

const initialState: dataState = {
    isLoading: false,
    status: null ,
    data:[],
    results:[],
    info:[],
    episode:''
}

export const fetchCharacterData: any = createAsyncThunk(
    'dataSlice/fetchCharacterData',
   async (data:any) => {
        data = axios.get('https://rickandmortyapi.com/api/character')
        return data
        
    }
  )


  
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {

  },
  extraReducers: {
    //all characters
    [fetchCharacterData.pending] : (state:dataState) => {
        state.isLoading = true;
    },
    [fetchCharacterData.fulfilled] : (state:dataState,action ) => {
        state.data = action.payload.data
        state.results = action.payload.data.results
        state.info = action.payload.data.info
       
    },
    [fetchCharacterData.rejected] : (state:dataState,action ) => {
      state.data = action.payload.status
  },

  }
})

// Action creators are generated for each case reducer function


export default dataSlice.reducer