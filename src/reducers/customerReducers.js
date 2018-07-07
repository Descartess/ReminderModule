import * as types from '../actions/types'
const INITIAL_STATE = {
  counter: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CUSTOMER: 
      return { ...state, counter: state.counter+=1 }
    default:
      return { ...state}
  }
}