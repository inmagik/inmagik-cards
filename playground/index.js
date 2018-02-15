import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => (
  <Router basename={process.env.NODE_ENV === 'production' ? '/inmagik-cards/' : undefined}>
    <Switch>
      <Route path='/' exact component={Home} />
      {/* <Route path='/Topbar' exact component={TopbarExample} /> */}
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
