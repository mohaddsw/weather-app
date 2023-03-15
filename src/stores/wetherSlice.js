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
        state.weatherData='error'
        state.loading=false
        state.weatherData={
            "coord": {
            "lon": 51.4215,
            "lat": 35.6944
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
            ],
            "base": "stations",
            "main": {
            "temp": 17.79,
            "feels_like": 16.72,
            "temp_min": 17.62,
            "temp_max": 17.99,
            "pressure": 1017,
            "humidity": 42
            },
            "visibility": 10000,
            "wind": {
            "speed": 3.09,
            "deg": 130
            },
            "clouds": {
            "all": 75
            },
            "dt": 1678812296,
            "sys": {
            "type": 2,
            "id": 47737,
            "country": "IR",
            "sunrise": 1678762046,
            "sunset": 1678804803
            },
            "timezone": 12600,
            "id": 112931,
            "name": "Tehran",
            "cod": 200
            }
    },
    [fetchWeatherApp.pending]:(state)=>{
      state.loading=true
    }
  }
})

// Action creators are generated for each case reducer function

export default weatherSlice.reducer