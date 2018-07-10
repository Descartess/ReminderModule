import * as types from './types'
import instance from '../config/axiosConfig'

export const addCustomer = (customerData) => ({
    type: types.ADD_CUSTOMER,
    payload: instance.post('customers', customerData)
  })

export const nameChange = (e) => ({
  type: types.NAME_CHANGE,
  payload: e.target.value
})

export const frequencyChange = (e) => ({
  type: types.FREQUENCY_CHANGE,
  payload: e.target.value
})

export const contactChange = (e) => ({
  type: types.CONTACT_CHANGE,
  payload: e.target.value
})

export const bottleTypeChange = (e) => ({
  type: types.BOTTLE_TYPE_CHANGE,
  payload: e.target.value
})

export const companyTypeChange = (e) => ({
  type: types.COMPANY_TYPE_CHANGE,
  payload: e.target.value
})

export const quantityChange = (e) => ({
  type: types.QUANTITY_CHANGE,
  payload: e.target.value
})
