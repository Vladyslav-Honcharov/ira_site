import React from "react";
import CustomSlider from "./CustomSlider";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Home() {
  return (
    <div className="home">
      <ThemeProvider theme={theme}>
        <CustomSlider />
      </ThemeProvider>
    </div>
  );
}

export default Home;
