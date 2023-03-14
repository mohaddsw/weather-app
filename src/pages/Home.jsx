import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSelector,useDispatch  } from 'react-redux'
import {fetchWeatherApp} from '../stores/wetherSlice.js'
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch=useDispatch()
  const apiKey = useSelector((state) => state.wether.apiKey)
  const weatherData = useSelector((state) => state.wether.weatherData)
  const [data,setData]=useState()
  const enterCityName=(e)=>{
    if(e.key==='Enter'){
      dispatch(fetchWeatherApp('tehran',apiKey))
      if( typeof weatherData ==='string'){
        alert('خطا در ارتباط با دیتابیس.')
       
      }
      
    }
  }
  useEffect(()=>{
     dispatch(fetchWeatherApp('tehran',apiKey))
    if( typeof weatherData ==='string'){
      alert('خطا در ارتباط با دیتابیس.')
     
    }
    console.log(weatherData);     
  },[])
  return (
    <Box sx={{ height: "100vh", padding: "20px" }}>
      <Grid
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={5}
        sx={{
          height: "100%",
          display: "flex",
        }}
      >
        <Grid item md={12} sm={12}>
          <TextField
            id="outlined-basic"
            label="city name"
            size="small"
            variant="filled"
            color="success"
            onKeyPress={enterCityName}
            sx={{
              background: "#ffffff4d",
            }}
          />
        </Grid>
        <Grid item md={12}>
          <p className="cityName">
            <Typography variant="h2">Tehran</Typography>
          </p>
        </Grid>
        <Grid
          item
          md={12}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={5}
        >
          <Grid Grid item md={6} className="degree">
            40ْ
          </Grid>
          <Grid Grid item md={6} className="type">
            cloud
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            width: "100%",
            background: "#ffffff80",
            padding: "20px",
            borderRadius: "10px",
            height:'100px'
          }}
          className="bottom"
        >
          <Grid
            Grid
            item
            md={4}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              letterSpacing: "0",
            }}
          >
            <Grid>
              <span>65F</span>
            </Grid>
            <Grid>
              <span>Feels Like</span>
            </Grid>
          </Grid>
          <Grid
            Grid
            item
            md={4}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              letterSpacing: "0",
            }}
          >
            <Grid>
              <span>65F</span>
            </Grid>
            <Grid>
              <span>Humedity</span>
            </Grid>
          </Grid>
          <Grid
            Grid
            item
            md={4}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              letterSpacing: "0",
            }}
          >
            <Grid>
              <span>65F</span>
            </Grid>
            <Grid>
              <span>wind speed</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
