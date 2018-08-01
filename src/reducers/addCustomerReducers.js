import * as types from '../actions/types'
const INITIAL_STATE = {
  name: '',
  type: 'Individual',
  contact: '',
  bottleType: '18L',
  frequency: 3,
  quantity: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CUSTOMER: 
      return { ...state }
    case types.NAME_CHANGE: 
      return { ...state, name: action.payload }
    case types.COMPANY_TYPE_CHANGE: 
      return { ...state, type: action.payload }
    case types.BOTTLE_TYPE_CHANGE: 
      return { ...state, bottleType: action.payload }
    case types.FREQUENCY_CHANGE: 
      return { ...state, frequency: parseInt(action.payload, 10) }
    case types.QUANTITY_CHANGE: 
      return { ...state, quantity: parseInt(action.payload, 10) }
    case types.CONTACT_CHANGE: 
      return { ...state, contact: action.payload }
    case types.ADD_CUSTOMER_FULFILLED:
      return { ...INITIAL_STATE }
    default:
      return { ...state}
  }
}