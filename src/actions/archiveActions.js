import * as types from '../actions/types'
import instance from '../config/axiosConfig'

export const getArchivedCustomer = () => ({
  type: types.GET_ARCHIVE_CUSTOMERS,
  payload: instance.get('customers')
})