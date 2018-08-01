import * as types from '../actions/types'
import _ from 'lodash'
import moment from 'moment'

const INITIAL_STATE = {
  loading: undefined,
  customers: [],
  reminder: [],
  selectedCustomer: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DAILY_REMINDERS_PENDING:
      return { ...state, loading: true }
    case types.GET_DAILY_REMINDERS_FULFILLED: {
      const customers  =  action.payload.data
      const reminders = _.filter(customers, (customer) => {
        const current_date = moment()
        const next_date = moment(customer.next_date)
        const diff = next_date.diff(current_date, 'days')
        if (diff <= 1 && !customer.archive) {
          return true
        }
        return false
      })
      return { ...state, loading: false, reminder: reminders}
    }
    case types.ORDER_ARCHIVED_FULFILLED:{
      const customers = action.payload.data
      const reminder = _.remove(state.reminder,n => n.id !== customers.id)
      return { ...state, loading: false, reminder }
    }
    case types.ORDER_MADE_FULFILLED:{
      const customers = action.payload.data
      const reminder = _.remove(state.reminder,n => n.id !== customers.id)
      return { ...state, loading: false, reminder }
    }
    case types.SELECT_CUSTOMER: {
      return { ...state, selectedCustomer: action.payload}
    }
    case types.ORDER_BOTTLE_TYPE_CHANGE: {
      state.selectedCustomer.bottleType = action.payload
      return { ...state, selectedCustomer: state.selectedCustomer }
    }
    case types.ORDER_DATE_CHANGE: {
      state.selectedCustomer.next_date = action.payload 
      return { ...state, selectedCustomer: state.selectedCustomer  }
    }
    case types.ORDER_QUANTITY_CHANGE: {
      state.selectedCustomer.quantity = action.payload
      return { ...state, selectedCustomer: state.selectedCustomer  }
    }
    default:
      return { ...state}
  }
}