import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import feather from 'feather-icons/dist/feather'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Page from './components/page/Page'
import Footer from './components/layout/Footer'

const App = () => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/page1" component={Page} />
          <Route exact path="/page2" component={Page} />
          <Route exact path="/page3" component={Page} />
          <Route exact path="/page4" component={Page} />
          <Route exact path="/page5" component={Page} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  )

}


export default App
