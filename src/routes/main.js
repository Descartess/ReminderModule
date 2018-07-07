import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Contact, About } from '../components/placeholders'
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/add' component={About}></Route>
    <Route exact path='/archives' component={Contact}></Route>
  </Switch>
);

export default Main
