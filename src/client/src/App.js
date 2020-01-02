import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import "./App.css";

import Menu from "./components/Menu";
import Home from "./components/Home";
// import Footer from "./components/Footer";

function App () {
    return (
      <div>
      <Router>
        <div className="App">
          <Menu />
          <Home />
        </div>
      </Router>
      </div>
    );
};

export default App;
