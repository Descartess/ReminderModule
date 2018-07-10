import * as types from '../actions/types'

export const orderMade = () => ({
  type: types.ORDER_MADE,
})

export const orderExtended = () => ({
  type: types.ORDER_EXTENDED,
})

export const orderArchived = () => ({
  type: types.ORDER_ARCHIVED,
})