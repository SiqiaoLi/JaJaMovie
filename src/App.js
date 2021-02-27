import React from "react";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <div className="content-wrap">
        <Nav />
        <Switch>
          <Route path={["/movie/:id", "/"]} exact>
            <Home />
          </Route>
          <Route path={["/JaJaMovie", "/upcoming"]}>
            <Home />
          </Route>
          <Route path="/nowplaying">
            <NowPlaying />
          </Route>
          <Route path="/popular">
            <Popular />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
