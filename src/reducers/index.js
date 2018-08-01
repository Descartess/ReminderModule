import { combineReducers } from 'redux'
import customerReducers from './addCustomerReducers'
import archivedCustomers from './archivedCustomerReducers'
import reminderReducers from './deliveryReminderReducers'

const reducers = combineReducers({
  customer: customerReducers,
  archived: archivedCustomers,
  reminders: reminderReducers
})

export default reducers 