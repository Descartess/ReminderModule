import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Contact } from '../components/placeholders'
import AddCustomer from '../components/addCustomer'
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/add' component={AddCustomer}></Route>
    <Route exact path='/archives' component={Contact}></Route>
  </Switch>
);

export default Main
