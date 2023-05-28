import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import loginPage from "./loginPage";
import CoinInfo from "./components/CoinInfo";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Route path="/" component={loginPage} exact />
        <Route path="/HomePage" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/coinInfo" component={CoinInfo} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
