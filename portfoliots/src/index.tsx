import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core/styles";


let theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: `#A3B5BD`
      
    },
    secondary: {
      main: `#629AAA`
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 10,
    htmlFontSize: 10 
  },
  spacing: 4,
});

theme = responsiveFontSizes(theme);
ReactDOM.render(

  <ThemeProvider theme={theme}>
    <Router>
    
        <App />
      
    </Router>
  </ThemeProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
