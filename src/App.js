import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Routes from "./Routes";

const App = () => {
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    getNavigation();
  }, []);

  async function getNavigation() {
    try {
      const res = await axios.get(
        "/api/v3/content/settings/?key=cac15f28976f6e0ff9542ef6a6"
      );
      setNavigation(res.data.settings.navigation);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Router>
      <Fragment>
        <Navbar navigation={navigation} />
        <Routes navigation={navigation} />
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
