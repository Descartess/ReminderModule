import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddCustomer from '../components/addCustomer'
import ArchivedCustomers from '../components/archivedCustomers'
import Reminders from '../components/deliveryReminder'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Reminders}></Route>
    <Route exact path='/add' component={AddCustomer}></Route>
    <Route exact path='/archives' component={ArchivedCustomers}></Route>
  </Switch>
);

export default Main
