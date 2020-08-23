import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Page from './components/page/Page'
import Routes from './Routes'
//redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route key="key1" exact path="/contenu-de-la-formation" component={Page} />
            <Route key="key2" exact path="/tag/getting-started/" component={Page} />
            <Route key="key3" exact path="/international" component={Page} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  )

}


export default App
