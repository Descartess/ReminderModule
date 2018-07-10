import { combineReducers } from 'redux'
import customerReducers from './addCustomerReducers'

const reducers = combineReducers({
  customer: customerReducers
})

export default reducers 