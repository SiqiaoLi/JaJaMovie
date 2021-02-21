import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/movie/:id", "/"]}>
        <div className="content-wrap">
          <Home />
        </div>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
