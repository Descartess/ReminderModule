import { combineReducers } from 'redux'
import customerReducers from './customerReducers'

const reducers = combineReducers({
  customer: customerReducers
})

export default reducers 