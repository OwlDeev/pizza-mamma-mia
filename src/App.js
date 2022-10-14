import "./App.css";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffff",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
});

function App() {

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Use function useState
          </Typography>
        </Toolbar>
      </AppBar>
      <footer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
          © 1998-2016 Developer OwlDev. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
