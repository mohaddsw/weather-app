import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import wheather from '../services/wether'

const initialState = {
  apiKey: '6d3b35c10c29fe17eb773fdbe64ed49d',
  weatherData:null,
  loading:false
}
export const fetchWeatherApp = createAsyncThunk(
    'fetchWeather',
    async (data) => {
      const response = await wheather.httpsGetWeather(data)
      return response.data
    }
  )
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {   
  },
  extraReducers:{
    [fetchWeatherApp.fulfilled]:(state,action)=>{
        state.weatherData=action.payload
        state.loading=false
    },
    [fetchWeatherApp.rejected]:(state)=>{
        state.weatherData='Error Message...city! not Found'
        state.loading=false
       
    },
    [fetchWeatherApp.pending]:(state)=>{
      state.loading=true
    }
  }
})

// Action creators are generated for each case reducer function

export default weatherSlice.reducer