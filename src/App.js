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
        "http://134.122.82.6/ghost/api/v3/content/settings/?key=9c5ea65e652af6ad698e4fbf3e"
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
