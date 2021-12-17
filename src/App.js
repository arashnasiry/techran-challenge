import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import CheckoutPage from './pages/checkout'
import NotFound from './pages/404'
import Tableshow from './pages/datatable'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={CheckoutPage} />
          <Route exact path='/show' component={Tableshow} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider >
  );
}

export default App;
