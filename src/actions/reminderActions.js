import * as types from '../actions/types'
import instance from '../config/axiosConfig'

export const getDailyReminders = () => ({
  type: types.GET_DAILY_REMINDERS,
  payload: instance.get('customers')
})

export const orderMade = (id,data) => ({
  type: types.ORDER_MADE,
  payload: instance.patch(`customers/${id}`,data)
})

export const orderExtended = (id, data) => ({
  type: types.ORDER_EXTENDED,
  payload: instance.patch(`customers/${id}`,data)
})

export const orderArchived = (id, data) => ({
  type: types.ORDER_ARCHIVED,
  payload: instance.patch(`customers/${id}`,data)
})

export const selectCustomer = customer => ({
  type: types.SELECT_CUSTOMER,
  payload: customer,
});


export const orderQuantityChange = (e) => ({
  type: types.ORDER_QUANTITY_CHANGE,
  payload: e.target.value
})

export const orderBottleTypeChange = (e) => ({
  type: types.ORDER_BOTTLE_TYPE_CHANGE,
  payload: e.target.value
})

export const orderDateChange = (e) => ({
  type: types.ORDER_DATE_CHANGE,
  payload: e.target.value
})
