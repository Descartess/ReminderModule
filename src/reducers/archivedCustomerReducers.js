import * as types from '../actions/types'
import _ from 'lodash'

const INITIAL_STATE = {
  loading: undefined,
  customers: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ARCHIVE_CUSTOMERS_PENDING:
      return { ...state, loading: true }
    case types.GET_ARCHIVE_CUSTOMERS_FULFILLED:{
      const customers  =  action.payload.data
      const archived_customers = _.filter(customers,'archive')
      return { ...state, loading: false, customers: archived_customers}
    }
    default:
      return { ...state}
  }
}