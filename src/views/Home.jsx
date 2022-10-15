import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/home.css";
// import { Typography } from "@mui/material";
import CardPrice from "../components/CardPrice";
import GallerySlide from "../components/gallerySlide";

function Home() {
  const logo = require("../imgs/logoMario.png");
  const { pizzas } = useContext(Context);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12}>
          <div className="divPortada">
            <div className="divAviso">
              <div className="divAvisoColumnaLeft">
                <div className="titlePortada textoBorde">Mario's Pizza</div>
                <div className="subTitlePortada textoBorde">
                  Las mejores pizzas del mundo champinon
                </div>
              </div>
              <div className="divAvisoColumnaRight">
                <img src={logo} className="imgMarioPortada"></img>
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="divHome">
            <GallerySlide></GallerySlide>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
