import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

  

const Home = () => {
  return (
    <>
      <h1 className="home-h1">Ear Training Exercises</h1>
      <div className="home-container">
        <Stack spacing={2} direction="row">
          <Button href="/chords" variant="outlined">
            Chords
          </Button>
          <Button href="/intervals" variant="outlined">
            Intervals
          </Button>
        </Stack>
      </div>
      <div className="landingBlurb">
        <Typography className="homeDescription">
          <p>These exercises will improve your musical ability by developing a more intuitive understanding of what you hear. For best results you should practice daily.</p>
        </Typography>
      </div>
    </>
  );
};

export default Home;
