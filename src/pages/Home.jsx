import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import axios from "../plugins/axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={5}
        >
          <Grid item md={12}>
            <TextField
              id="outlined-basic"
              label="city name"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={12}>
            Tehran
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
            <Grid Grid item md={6}>
              40F
            </Grid>
            <Grid Grid item md={6}>
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
            spacing={5}
          >
            <Grid
              Grid
              item
              md={4}
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid>
                <Chip label="65F" variant="outlined" />
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
            >
              <Grid>
                <Chip label="65F" variant="outlined" />
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
            >
              <Grid>
                <Chip label="65F" variant="outlined" />
              </Grid>
              <Grid>
                <span>wind speed</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
