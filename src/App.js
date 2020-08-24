import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Page from './components/page/Page'
import Routes from './Routes'
//redux
import { Provider } from 'react-redux'

const App = () => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes />
        <Footer />
      </Fragment>
    </Router>
  )

}


export default App
